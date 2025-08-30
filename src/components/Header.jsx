import { Link, NavLink } from "react-router-dom";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";
import useFetchTechIcon from "../hooks/FetchTechIcon";

const Header = () => {
  const { resume, loading } = useFetchResumeInfo();
  const { getIcon } = useFetchTechIcon();

  return (
    <header className="bg-white/60 backdrop-blur-sm sticky top-0 z-50 border-b">
      {!loading && (
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-slate-800">
            {resume.name}
          </Link>
          <nav className="space-x-4 text-slate-700 hidden md:block">
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
              to="/experience"
            >
              Experience
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
          <div className="md:hidden">
            <div className="flex flex-col justify-center items-center">
              {getIcon("menu")}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
