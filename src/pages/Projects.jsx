import { useState } from "react";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";

const Projects = () => {
  const [active, setActive] = useState(null);
  const { resume, loading } = useFetchResumeInfo();

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
                <div className="flex flex-col justify-center items-center">
                  <img src="https://raw.githubusercontent.com/scode24/path-wise-ai/refs/heads/master/public/show-image.png" />
                </div>
                <div className="flex flex-col p-3">
                  <div className="flex flex-row justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <div className="text-sm text-slate-600">{p.stack}</div>
                    </div>
                    <div>
                      <button
                        onClick={() => setActive(idx)}
                        className="text-sm px-3 py-1 border rounded"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-slate-700 text-sm">{p.desc}</p>
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
