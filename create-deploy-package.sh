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

# Ensure we're in the project root
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
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
rm -f portfolio-deploy.zip

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

# Copy required files to temp directory
print_status "Copying files to temporary directory..."
cp -r .next $TEMP_DIR/
cp -r public $TEMP_DIR/
cp package.json $TEMP_DIR/
cp package-lock.json $TEMP_DIR/
cp next.config.ts $TEMP_DIR/
cp tsconfig.json $TEMP_DIR/

# Copy additional configuration files if they exist
if [ -f ".env.production" ]; then
    cp .env.production $TEMP_DIR/
fi

# Create zip file
print_status "Creating deployment zip file..."
cd $TEMP_DIR
zip -r ../portfolio-deploy.zip .
cd ..

# Install only production dependencies in the deployment directory
print_status "Installing production dependencies for deployment..."
cd $TEMP_DIR
npm ci --production
cd ..

# Clean up
print_status "Cleaning up..."
rm -rf $TEMP_DIR

# Verify zip file was created
if [ -f "portfolio-deploy.zip" ]; then
    print_success "Deployment package created successfully: portfolio-deploy.zip"
    print_success "Size: $(du -h portfolio-deploy.zip | cut -f1)"
else
    print_error "Failed to create deployment package"
    exit 1
fi

print_status "You can now upload portfolio-deploy.zip to your cPanel Node.js application directory"