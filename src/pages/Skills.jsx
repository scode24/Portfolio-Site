import SkillBox from "../components/SkillBox";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";

const Skills = () => {
  const { resume, loading } = useFetchResumeInfo();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 h-[80vh]">
      {!loading && (
        <>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {resume.skills.map((skill) => (
              <SkillBox
                data={{
                  skill: skill,
                }}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default Skills;
