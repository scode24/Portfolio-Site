import useFetchResumeInfo from "../hooks/FetchResumeInfo";

const About = () => {
  const { resume, loading } = useFetchResumeInfo();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {!loading && (
        <>
          <h2 className="text-2xl font-semibold">About</h2>
          {resume.about.map((text, index) => {
            return (
              <p key={index} className="mt-4  leading-relaxed">
                {text}
              </p>
            );
          })}

          <h3 className="mt-8 text-xl font-semibold">Known Languages</h3>
          <ul className="mt-2 list-disc list-inside ">
            {resume.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold">Education</h3>
          <div className="mt-2 ">
            {resume.education.map((e) => (
              <div key={e.school} className="mb-4">
                <div className="font-semibold">{e.school}</div>
                <div className="text-sm ">
                  {e.degree} • {e.year}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default About;
