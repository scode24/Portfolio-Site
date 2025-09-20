import { Link, useNavigate } from "react-router-dom";
import { ProjectShowbox } from "../components/ProjectShowbox";
import SkillBox from "../components/SkillBox";
import StackList from "../components/StackList";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";
import useFetchTechIcon from "../hooks/FetchTechIcon";

const Home = () => {
  const { resume, loading } = useFetchResumeInfo();
  const { getIcon } = useFetchTechIcon();

  const navigator = useNavigate();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {!loading && (
        <>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold ">{resume.name}</h1>
              <p className="mt-2 ">
                {resume.title} • {resume.location}
              </p>
              <p className="mt-6  leading-relaxed">{resume.summary}</p>

              <div className="flex flex-col mt-6 gap-3 md:flex-row">
                <a
                  href="/Soumyabrata_Sarkar_Resume.pdf"
                  download
                  className="button-style px-4 py-2 border rounded text-sm md:w-[170px] dark:border-zinc-800"
                >
                  Download Resume
                </a>
                <Link
                  to="/contact"
                  className="button-style px-4 py-2 bg-slate-800 text-white rounded text-sm md:w-[170px] dark:bg-zinc-950"
                >
                  Contact
                </Link>
              </div>

              <h2 className="mt-8 text-2xl font-semibold ">Top Skills</h2>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm ">
                {resume.skills.slice(0, 8).map((skill) => (
                  <SkillBox
                    data={{
                      skill: skill,
                    }}
                  />
                ))}
              </div>
            </div>
            <aside className="flex-col items-center hidden sm:flex">
              <div className="w-40 h-40 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center">
                <img src="photo.jpg" alt="Soumyabrata-Sarkar-photo" />
                {/* <span className="">Photo</span> */}
              </div>
              <div className="mt-4 text-sm  text-center">
                <div className="flex flex-row">
                  <div className="flex flex-col justify-center items-center mr-2">
                    {getIcon("email")}
                  </div>
                  <div>{resume.email}</div>
                </div>
                {/* 
                <div className="flex flex-row justify-center mt-2">
                  <div className="flex flex-col justify-center items-center mr-2">
                    {getIcon("phone")}
                  </div>
                  <div>{resume.phone}</div>
                </div> */}
              </div>
              <div className="mt-4 flex gap-3">
                <div className="flex flex-row text-sm px-3 py-1 border rounded dark:border-zinc-800">
                  <div className="flex flex-col justify-center items-center mr-2">
                    {getIcon("linkedin")}
                  </div>
                  <div>
                    <a
                      href={resume.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex flex-row text-sm px-3 py-1 border rounded dark:border-zinc-800">
                  <div className="flex flex-col justify-center items-center mr-2">
                    {getIcon("github")}
                  </div>
                  <div>
                    <a
                      href={resume.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold ">Highlighted Projects</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              {resume.projects.map(
                (p) =>
                  p.highlight && (
                    <div className="flex flex-col border rounded bg-white cursor-pointer dark:border-zinc-800">
                      <ProjectShowbox
                        data={{
                          imgsrc: p.imgSrc || "logo192.png",
                          sourceLink: p.source,
                          width: 200,
                          height: 200,
                        }}
                      />
                      <article
                        key={p.title}
                        className="p-4 dark:bg-zinc-950 h-full"
                        onClick={() => navigator("projects")}
                      >
                        <h3 className="font-semibold ">{p.title}</h3>

                        <div className="mt-5">
                          <StackList
                            data={{
                              stacks: p.stack,
                            }}
                          />
                        </div>

                        <p className="mt-3  text-sm">{p.shortDesc}</p>
                      </article>
                    </div>
                  )
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
