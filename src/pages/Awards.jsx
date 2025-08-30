import useFetchResumeInfo from "../hooks/FetchResumeInfo";

const Awards = () => {
  const { resume, loading } = useFetchResumeInfo();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {!loading && (
        <>
          <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
          <ul className="mt-4 list-disc list-inside text-slate-700">
            {resume.awards.map((a) => (
              <li key={a.title} className="mb-2">
                <div className="font-semibold">
                  {a.title} — {a.org} ({a.year})
                </div>
                {a.note && (
                  <div className="text-sm text-slate-600">{a.note}</div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Awards;
