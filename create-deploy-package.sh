#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored status messages
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check directory structure
check_directory_structure() {
    local missing_files=()

    # List of required directories and files
    local required=(
        "src/app"
        "src/components"
        "package.json"
        "next.config.ts"
        "tsconfig.json"
    )

    for item in "${required[@]}"; do
        if [ ! -e "$item" ]; then
            missing_files+=("$item")
        fi
    done

    if [ ${#missing_files[@]} -ne 0 ]; then
        print_error "Missing required files/directories:"
        for file in "${missing_files[@]}"; do
            echo "  - $file"
        done
        return 1
    fi
    return 0
}

# Create server.js if it doesn't exist
create_server_js() {
    cat > server.js << 'EOL'
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
EOL
    print_success "Created server.js"
}

# Ensure we're in the project root
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Check directory structure
print_status "Checking project structure..."
if ! check_directory_structure; then
    print_error "Project structure validation failed. Please fix the missing files/directories."
    exit 1
fi

# Create temp directory for production files
print_status "Creating temporary directory..."
TEMP_DIR="deploy_temp"
rm -rf $TEMP_DIR
mkdir $TEMP_DIR

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next
rm -f personal-website.zip

# Install all dependencies (including dev dependencies)
print_status "Installing dependencies..."
npm ci

# Build the project
print_status "Building project..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed. Please fix the errors and try again."
    exit 1
fi

# Create server.js
print_status "Creating server.js..."
create_server_js

# Copy required files to temp directory
print_status "Copying files to temporary directory..."
cp -r src $TEMP_DIR/
cp -r .next $TEMP_DIR/
cp -r public $TEMP_DIR/
cp package.json $TEMP_DIR/
cp package-lock.json $TEMP_DIR/
cp next.config.ts $TEMP_DIR/
cp tsconfig.json $TEMP_DIR/
cp server.js $TEMP_DIR/

# Create production .htaccess file
print_status "Creating .htaccess file..."
cat > $TEMP_DIR/.htaccess << 'EOL'
# DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION BEGIN
PassengerAppRoot "/home/ashfrewu/personal-website"
PassengerBaseURI "/"
PassengerNodejs "/home/ashfrewu/nodevenv/personal-website/20/bin/node"
PassengerAppType node
PassengerStartupFile server.js
# DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION END
EOL

# Create zip file
print_status "Creating deployment zip file..."
cd $TEMP_DIR
zip -r ../personal-website.zip .
cd ..

# Clean up
print_status "Cleaning up..."
rm -rf $TEMP_DIR

# Verify zip file was created
if [ -f "personal-website.zip" ]; then
    print_success "Deployment package created successfully: personal-website.zip"
    print_success "Size: $(du -h personal-website.zip | cut -f1)"
    print_success "\nDeployment package contains:"
    print_status "- Next.js application files (src/app, src/components)"
    print_status "- Built files (.next/)"
    print_status "- Public assets (public/)"
    print_status "- Configuration files (next.config.ts, tsconfig.json)"
    print_status "- server.js"
    print_status "- .htaccess"
else
    print_error "Failed to create deployment package"
    exit 1
fi

print_status "You can now upload personal-website.zip to your server and extract it"