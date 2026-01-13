# The Can Buddy

Professional trash can cleaning service website built with Vite, React, TypeScript, and Tailwind CSS.

## Features

-  Beautiful, modern design with ocean-themed color scheme
-  Fully responsive layout
- Fast performance with Vite
- TypeScript for type safety
-  Tailwind CSS for styling
-  Reusable UI components with shadcn/ui
-  React Router for navigation
-  Contact form with toast notifications

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
thecanbuddy/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Rates.tsx
│   │   ├── Reviews.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: TanStack Query
- **Notifications**: Sonner + Custom Toast

## Design System

The project uses a custom ocean-themed design system with:

- Primary colors: Ocean Blue (#0f72bb)
- Accent colors: Sky Blue (#2bb9e8)
- Custom shadows and gradients
- Responsive typography
- Smooth animations

## License

MIT

## Contact

For questions or support, visit [The Can Buddy](https://thecanbuddy.com)
