import { useState } from "react";
import ArcAnimated from "./components/arc";
import BunAnimated from "./components/bun";
import DocusaurausAnimated from "./components/docusauraus";
import ReactAnimated from "./components/react";
import TailwindAnimated from "./components/tailwind";
import GeminiAnimated from "./components/gemini";
import GitlabAnimated from "./components/gitlab";
import IEAnimated from "./components/ie";
import { useTouch } from "./hooks/useTouch";

function App() {
  const isTouchDevice = useTouch();
  const [animatingComponents, setAnimatingComponents] = useState<Set<string>>(new Set());
  const triggerAnimation = (componentName: string) => {
    setAnimatingComponents(prev => new Set(prev).add(componentName));
    setTimeout(() => {
      setAnimatingComponents(prev => {
        const newSet = new Set(prev);
        newSet.delete(componentName);
        return newSet;
      });
    }, 2000); 
  };

  const components = [
    {
      name: "React",
      component: <ReactAnimated isAnimating={animatingComponents.has("React")} />,
    },
    {
      name: "Tailwind",
      component: <TailwindAnimated isAnimating={animatingComponents.has("Tailwind")} />,
    },
    {
      name: "Arc",
      component: <ArcAnimated isAnimating={animatingComponents.has("Arc")} />,
    },
    {
      name: "Bun",
      component: <BunAnimated isAnimating={animatingComponents.has("Bun")} />,
    },
    {
      name: "Docusauraus",
      component: <DocusaurausAnimated isAnimating={animatingComponents.has("Docusauraus")} />,
    },
    {
      name: "Gemini",
      component: <GeminiAnimated isAnimating={animatingComponents.has("Gemini")} />,
    },
    {
      name: "Gitlab",
      component: <GitlabAnimated isAnimating={animatingComponents.has("Gitlab")} />,
    },
    {
      name: "IE",
      component: <IEAnimated isAnimating={animatingComponents.has("IE")} />,
    },  
  ];
  return (
    <>
      <nav className="px-4 py-2 flex justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4 ">
        <div className="flex flex-col col-span-2">
          <h1 className="text-3xl font-bold uppercase font-geo">iconHover</h1>
          <p className=" text-gray-400">
            Pure css hover animations that make popular logos come alive.
          </p>
        </div>
        <div className="flex gap-4 col-span-1 col-start-4 items-center justify-end">
          <a
            href="https://github.com/madebymanish"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            href="https://x.com/madebymanish"
            target="_blank"

            rel="noopener noreferrer"
          >
            @madebymanish
          </a>
        </div>
      </nav>
      <main className="grid grid-cols-1 gap-2 p-4  items-start sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {components.map((component) => (
          <div
            key={component.name}
            className="bg-white rounded-4xl border border-gray-100 h-80 flex flex-col items-center justify-center shadow-2xs max-sm:h-60 relative"
          >
            {component.component}
            <p className="text-sm text-gray-400 mt-4">{component.name}</p>
            {isTouchDevice && (
              <button
                onClick={() => triggerAnimation(component.name)}
                className="absolute bottom-4 right-4 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                aria-label={`Trigger ${component.name} animation`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
