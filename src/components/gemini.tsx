
const GeminiAnimated = () => {
  return (
    <div className="p-4 group">

    <svg 
      className="w-16 h-16 group-hover:animate-scale-rotate"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#a)"><path fill="url(#b)" d="M50 100A59.6 59.6 0 0 0 0 50 59.6 59.6 0 0 0 50 0a59.605 59.605 0 0 0 50 50 59.605 59.605 0 0 0-50 50"/></g><defs><linearGradient id="b" x1="0" x2="6873" y1="10000" y2="3039.5" gradientUnits="userSpaceOnUse"><stop stopColor="#1C7DFF"/><stop offset=".52" stopColor="#1C69FF"/><stop offset="1" stopColor="#F0DCD6"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z"/></clipPath></defs></svg>
    </div>
  );
};

export default GeminiAnimated