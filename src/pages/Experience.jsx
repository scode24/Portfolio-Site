import { useState } from "react";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";

const Experience = () => {
  const [active, setActive] = useState(null);
  const { resume, loading } = useFetchResumeInfo();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {!loading && (
        <>
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-6">
            {resume.experience.map((exp, idx) => (
              <div key={exp.company} className="border rounded p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-lg">
                      {exp.role} — {exp.company}
                    </div>
                    <div className="text-sm text-slate-600">
                      {exp.location} • {exp.period}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setActive(idx)}
                      className="text-sm px-3 py-1 border rounded"
                    >
                      Read more
                    </button>
                  </div>
                </div>
                <div className="mt-3 text-slate-700">
                  <ul className="list-disc list-inside">
                    {exp.bullets.slice(0, 2).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {active !== null && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
              <div className="bg-white max-w-3xl w-full rounded p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {resume.experience[active].role} —{" "}
                    {resume.experience[active].company}
                  </h3>
                  <button className="text-sm" onClick={() => setActive(null)}>
                    Close
                  </button>
                </div>
                <div className="mt-4 text-slate-700">
                  <ul className="list-disc list-inside">
                    {resume.experience[active].bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Experience;
