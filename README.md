# Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-13-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-ff69b4)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark mode toggle, smooth animations, and a clean, professional design.

## 🌟 Features

- **Responsive Design:** Fully responsive layout that works seamlessly across all devices
- **Dark Mode:** System-aware theme switching with smooth transitions
- **Interactive Timeline:** Visual representation of professional journey
- **Animated UI:** Smooth animations and transitions using Framer Motion
- **Dynamic Content:** Easily updateable projects, publications, and experience sections
- **SEO Optimized:** Built with best practices for search engine optimization
- **Type Safety:** Full TypeScript support for robust development
- **Performance Optimized:** Fast page loads and optimized image delivery

## 🚀 Tech Stack

- **Framework:** Next.js 13+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Theme:** next-themes
- **Development:** 
  - ESLint
  - PostCSS
  - Turbopack

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ashfakshibli/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Project Structure

```
portfolio-website/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # React components
│   │   ├── home/           # Homepage components
│   │   ├── layout/         # Layout components
│   │   ├── projects/       # Project components
│   │   └── publications/   # Publication components
│   ├── types/              # TypeScript types
│   └── hooks/              # Custom React hooks
├── public/                  # Static assets
└── styles/                 # Global styles
```

### Key Components

- `HeroSection`: Main landing section with profile and timeline
- `CompactTimeline`: Interactive professional timeline
- `Highlights`: Technical expertise showcase
- `ProjectCard`: Reusable project display component
- `PublicationCard`: Academic publication component

## 📱 Features Breakdown

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Optimized images with Next.js Image component

### Theme Switching
- System preference detection
- Smooth transition animations
- Persistent theme selection

### Interactive Elements
- Animated section transitions
- Hover effects
- Loading states

## 🚀 Deployment

1. Build the production version:
```bash
npm run build
```

2. Use the deployment script:
```bash
./create-deploy-package.sh
```

This will create a `personal-website.zip` file ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✨ Acknowledgments

- Design inspiration from modern portfolio trends
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Next.js team for an amazing framework

## 📞 Contact

Ashfak Md Shibli - shibli.emon@gmail.com

Project Link: [https://github.com/ashfakshibli/portfolio-website](https://github.com/ashfakshibli/portfolio-website)