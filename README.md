# BioSync

A next-generation biotechnology synthesis landing page built with React, Vite, and Three.js. This project showcases a modern, high-performance web interface featuring 3D rendering and scroll-driven animations.

## ✨ Features

- **Interactive 3D Hero Section**: Features a 3D particle DNA double helix built with Three.js and React Three Fiber. **You can interact with it by clicking and dragging on the Hero section to rotate the 3D animation!**
- **Scroll Animations**: Smooth, high-performance scroll triggers powered by GSAP.
- **Modern UI**: Styled beautifully with Tailwind CSS v4 and Framer Motion for micro-interactions.
- **Optimized Performance**: Components are code-split using `React.lazy()` for lightning-fast initial load times.
- **Type-Safe**: Written entirely in TypeScript.

## 🚀 Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
*(If you haven't already downloaded or cloned the project folder)*
```bash
git clone <your-repository-url>
cd Assignment
```

### 2. Install dependencies
Run the following command to install all required libraries (React, Three.js, GSAP, etc.):
```bash
npm install
```

### 3. Run the Development Server
Start the local Vite development server:
```bash
npm run dev
```
Once it's running, open your browser and navigate to `http://localhost:5173` to view the website!

### 4. Build for Production
To create an optimized, minified production build:
```bash
npm run build
```
The output will be generated in the `dist` folder. You can preview this build locally by running:
```bash
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **3D Rendering**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: GSAP, Framer Motion
- **Icons**: Lucide React

---
*Built with modern web standards for optimal performance and user experience.*
