import ArcAnimated from "./components/arc";
import BunAnimated from "./components/bun";
import DocusaurausAnimated from "./components/docusauraus";
import ReactAnimated from "./components/react";
import TailwindAnimated from "./components/tailwind";
import GeminiAnimated from "./components/gemini";
import GitlabAnimated from "./components/gitlab";
import IEAnimated from "./components/ie";
function App() {
  const components = [
    {
      name: "React",
      component: <ReactAnimated />,
    },
    {
      name: "Tailwind",
      component: <TailwindAnimated />,
    },
    {
      name: "Arc",
      component: <ArcAnimated />,
    },
    {
      name: "Bun",
      component: <BunAnimated />,
    },
    {
      name: "Docusauraus",
      component: <DocusaurausAnimated />,
    },
    {
      name: "Gemini",
      component: <GeminiAnimated />,
    },
    {
      name: "Gitlab",
      component: <GitlabAnimated />,
    },
    {
      name: "IE",
      component: <IEAnimated />,
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
            className="bg-white rounded-4xl border border-gray-100 h-80 flex flex-col items-center justify-center shadow-2xs max-sm:h-60"
          >
            {component.component}
            <p className="text-sm text-gray-400 mt-4">{component.name}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
