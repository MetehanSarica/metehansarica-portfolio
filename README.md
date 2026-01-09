# METEHANSARICA.DEV 🚀

![Portfolio Preview](https://metehansarica.dev/opengraph-image.png)

> A modern, interactive portfolio website for a Junior .NET Developer, built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

This project showcases a developer-first aesthetic with a terminal-inspired UI, 3D interactive elements, and a fully functional floating command-line widget.

## ✨ Key Features

- **🎨 Immersive Design**: Dark theme with a "VS Code" and "Terminal" inspired aesthetic.
- **🧊 3D Interactivity**: Reactive 3D particle scene using `React Three Fiber`.
- **⌨️ Interactive Terminal**: A functional, draggable terminal widget (`ls`, `cd`, `whoami`, etc.).
- **⚡ Performance**: Built on Next.js 16 (Turbopack) for blazing fast performance.
- **📱 Responsive**: Fully optimized for desktop, tablet, and mobile devices.
- **🧩 Type-Safe**: 100% written in TypeScript.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core**: React 19, TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Icons**: Lucide React
- **Font**: Inter (Sans) & Fira Code (Mono)

## 🚀 Getting Started

Clone the repository and install dependencies to run the project locally.

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/MetehanSarica/metehansarica-portfolio.git

# Navigate to the project directory
cd metehansarica-portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
# Open http://localhost:3000 in your browser
```

## 🖥️ Terminal Commands

The floating terminal widget supports the following commands:

| Command | Description |
| :--- | :--- |
| `help` | Lists available commands |
| `ls` | Lists site sections (home, about, skills, etc.) |
| `cd [section]` | Navigates to a specific section |
| `cat [section]` | Displays a brief summary of the section |
| `whoami` | Displays developer bio |
| `open [link]` | Opens GitHub, LinkedIn, or Email |
| `clear` | Clears the terminal history |

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles & Tailwind
│   ├── layout.tsx        # Root layout & Metadata
│   └── page.tsx          # Main landing page
├── components/           # Reusable UI Components
│   ├── CodeWindow.tsx    # C# Code typing effect
│   ├── InteractiveTerminal.tsx # Floating terminal widget
│   ├── RevealOnScroll.tsx # Animation wrapper
│   ├── Scene3D.tsx       # Three.js background scene
│   └── TerminalWindow.tsx # Section container
└── public/               # Static assets
```

## 📬 Contact

- **Email**: [metehansrc23@gmail.com](mailto:metehansrc23@gmail.com)
- **LinkedIn**: [Metehan Sarıca](https://www.linkedin.com/in/metehan-sar%C4%B1ca-09b27a269/)
- **GitHub**: [@MetehanSarica](https://github.com/MetehanSarica)

---

Built with ❤️ by [Metehan Sarıca](https://metehansarica.dev).
