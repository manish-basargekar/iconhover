# iconHover 🎨

Pure CSS hover animations that make popular logos come alive.




https://github.com/user-attachments/assets/2fe778e6-57f4-4dbb-b79f-4ef35dbaa5b1



## What is it?

iconHover is a collection of beautiful, smooth CSS hover animations for popular technology logos and icons. Each animation is crafted with pure CSS and Tailwind CSS, providing delightful micro-interactions when users hover over the icons.

The project currently features animated versions of:
- React
- Tailwind CSS
- Arc Browser
- Bun
- Docusaurus
- Google Gemini
- GitLab
- Internet Explorer

Each icon comes with its own unique hover animation - from spinning React atoms to bouncing Tailwind waves, creating engaging visual feedback for your users.

## Motivation

Modern web applications thrive on delightful micro-interactions. While icons are essential for navigation and visual communication, static icons can feel lifeless. iconHover bridges this gap by providing:

- **Engaging User Experience**: Subtle animations that provide immediate visual feedback
- **Performance First**: Pure CSS animations that don't rely on JavaScript libraries
- **Accessibility Conscious**: Respects `prefers-reduced-motion` for users who prefer minimal animations
- **Easy Integration**: Copy-paste ready components that work with any React project
- **Customizable**: Built with Tailwind CSS for easy customization and theming

The goal is to make it effortless for developers to add personality to their applications while maintaining performance and accessibility standards.

## How to Copy/Paste and Use Animations in Your Own App

### Prerequisites
- A React project with TypeScript
- Tailwind CSS installed and configured

### Step 1: Copy the Component
Browse the `src/components/` directory and find the animation you want. For example, to use the React animation:

1. Copy the entire `react.tsx` file content:
```tsx
const ReactAnimated = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      className="w-16 h-16
      hover:animate-[spin_500ms_ease_infinite]
      motion-reduce:animate-none"
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
};

export default ReactAnimated;
```

### Step 2: Add Custom Animations to Your CSS
Some components use custom keyframe animations. Copy the relevant animations from `src/index.css` to your CSS file:

```css
@theme {
  --animate-tailwind-wave: tailwind-wave 1s ease-in-out infinite;
  
  @keyframes tailwind-wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
```

### Step 3: Use in Your Component
```tsx
import ReactAnimated from './components/ReactAnimated';

function MyApp() {
  return (
    <div className="p-8">
      <h1>My Awesome App</h1>
      <ReactAnimated />
    </div>
  );
}
```

### Customization Tips
- Adjust size by changing `w-16 h-16` classes
- Modify animation duration by changing the timing values
- Change colors by updating the `fill` and `stroke` attributes
- Add your own hover effects by extending the className

## How to Contribute

We welcome contributions! Here's how you can help improve iconHover:

### Types of Contributions
1. **New Icon Animations**: Add animations for popular logos/brands
2. **Animation Improvements**: Enhance existing animations with better timing or effects
3. **Bug Fixes**: Fix any issues with existing animations
4. **Documentation**: Improve README, add code comments, or create tutorials
5. **Accessibility**: Ensure animations work well with screen readers and reduced motion preferences

### Contribution Guidelines

1. **Fork the Repository**
   ```bash
   git fork https://github.com/madebymanish/iconhover.git
   ```

2. **Follow the Component Structure**
   - Each component should be in its own file in `src/components/`
   - Use TypeScript with proper typing
   - Include accessibility considerations (`motion-reduce:animate-none`)
   - Follow the naming convention: `[BrandName]Animated`

3. **Animation Standards**
   - Keep animations subtle and professional
   - Duration should typically be between 200ms-1s
   - Use `ease-in-out` or `ease` timing functions
   - Test with `prefers-reduced-motion`

4. **Code Quality**
   - Follow the existing code style
   - Use meaningful variable names
   - Add comments for complex animations
   - Ensure TypeScript types are correct

5. **Testing**
   - Test your animation in different browsers
   - Verify it works with reduced motion preferences
   - Check performance impact

6. **Submit a Pull Request**
   - Create a descriptive PR title
   - Explain what your animation does
   - Include a screenshot or GIF if possible
   - Reference any related issues

### Adding a New Icon Animation

1. Create a new file in `src/components/[brand-name].tsx`
2. Follow this template:
```tsx
const BrandNameAnimated = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-16 h-16
      hover:animate-your-animation
      motion-reduce:animate-none"
    >
      {/* SVG content */}
    </svg>
  );
};

export default BrandNameAnimated;
```

3. Add any custom keyframes to `src/index.css`
4. Import and add your component to the `components` array in `src/App.tsx`
5. Test thoroughly and submit a PR

## Git Clone and Repository Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Clone and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/madebymanish/iconhover.git
   cd iconhover
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see the project running.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

### Project Structure
```
iconhover/
├── src/
│   ├── components/          # Individual icon animation components
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and animations
├── public/                 # Static assets
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

### Development Tips

1. **Hot Reload**: The development server supports hot reload, so changes appear instantly
2. **Component Isolation**: Each icon is a separate component for easy testing and reuse
3. **CSS Variables**: Custom animations are defined in `src/index.css` using Tailwind's `@theme` directive
4. **TypeScript**: Full TypeScript support with proper type checking
5. **Responsive**: All animations work across different screen sizes

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory, ready for deployment to any static hosting service.

---

## License

MIT License - feel free to use these animations in your projects!

## Credits

Created by [@madebymanish](https://github.com/madebymanish) | Follow on [Twitter](https://x.com/madebymanish)
