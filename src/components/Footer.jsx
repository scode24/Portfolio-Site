import useFetchResumeInfo from "../hooks/FetchResumeInfo";

const Footer = () => {
  const { resume } = useFetchResumeInfo();

  return (
    resume && (
      <footer className="border-t mt-12 py-8 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-sm ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>
              © {new Date().getFullYear()} {resume.name}. Built with React +
              Tailwind.
            </div>
            <div className="space-x-4">
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={resume.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="/Soumyabrata_Sarkar_Resume.pdf"
                download
                className="hover:underline"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
