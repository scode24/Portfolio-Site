import { useState } from "react";
import { ProjectShowbox } from "../components/ProjectShowbox";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";
import useFetchTechIcon from "../hooks/FetchTechIcon";

const ActionButton = (props) => {
  const { getIcon } = useFetchTechIcon();
  const { icon, name, isVisible } = props.data;

  return (
    isVisible && (
      <button
        // onClick={() => setActive(idx)}
        className="flex flex-row text-sm px-3 py-1 border rounded w-full"
      >
        <div className="flex flex-col justify-center items-center mr-2">
          {getIcon(icon)}
        </div>
        <div className="flex flex-col justify-center items-center text-center w-full">
          {name}
        </div>
      </button>
    )
  );
};

const Projects = () => {
  const [active, setActive] = useState(null);
  const { resume, loading } = useFetchResumeInfo();
  const { getIcon } = useFetchTechIcon();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {!loading && (
        <>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {resume.projects.map((p, idx) => (
              <div
                key={p.title}
                className="flex flex-col border rounded bg-white"
              >
                <div className="flex flex-row border-b">
                  <div className="flex flex-col justify-center items-center m-4">
                    {getIcon("project")}
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold">{p.title}</h3>
                    <div className="text-sm text-slate-600">{p.stack}</div>
                  </div>
                </div>
                <ProjectShowbox
                  data={{
                    imgsrc: p.imgSrc || "logo192.png",
                    sourceLink: "",
                    liveLink: "",
                    demoLink: "",
                    width: 200,
                  }}
                />
                <div className="flex flex-col p-3">
                  <div className="flex flex-row justify-between items-start gap-3">
                    <ActionButton
                      data={{
                        icon: "GitHub",
                        name: "Source",
                        isVisible: true,
                      }}
                    />
                    <ActionButton
                      data={{
                        icon: "internet",
                        name: "Live",
                        isVisible: true,
                      }}
                    />
                    <ActionButton
                      data={{
                        icon: "youtube",
                        name: "Demo",
                        isVisible: true,
                      }}
                    />
                    <ActionButton
                      data={{
                        icon: "github",
                        name: "Source",
                        isVisible: false,
                      }}
                    />
                  </div>
                  <p className="mt-5 text-slate-700 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {active !== null && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
              <div className="bg-white max-w-3xl w-full rounded p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {resume.projects[active].title}
                  </h3>
                  <button className="text-sm" onClick={() => setActive(null)}>
                    Close
                  </button>
                </div>
                <div className="mt-4 text-slate-700">
                  <p>{resume.projects[active].desc}</p>
                  <div className="mt-3 text-sm text-slate-600">
                    Stack: {resume.projects[active].stack}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Projects;
