import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useFetchResumeInfo from "../hooks/FetchResumeInfo";
import useFetchTechIcon from "../hooks/FetchTechIcon";

const MenuDropdown = (props) => {
  const { state } = props.data;
  const { getIcon } = useFetchTechIcon();
  const { resume } = useFetchResumeInfo();
  const navigator = useNavigate();

  return (
    state && (
      <div className="flex flex-col absolute top-7 right-0 z-10 bg-slate-50 border w-[200px] shadow rounded">
        <div className="flex flex-col p-3">
          <div className="flex flex-col justify-center items-center">
            <img src="photo.jpg" className="rounded-full w-[100px] h-[100px]" />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <div className="flex flex-row text-sm px-3 py-1 border rounded">
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

            <div className="flex flex-row text-sm px-3 py-1 border rounded">
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
        </div>
        <div className="flex flex-col">
          <span className="p-3 border-b" onClick={() => navigator("/")}>
            Home
          </span>
          <span className="p-3 border-b" onClick={() => navigator("about")}>
            About
          </span>
          <span className="p-3 border-b" onClick={() => navigator("skills")}>
            Skills
          </span>
          <span className="p-3 border-b" onClick={() => navigator("projects")}>
            Projects
          </span>
          <span className="p-3" onClick={() => navigator("contact")}>
            Contact
          </span>
        </div>
      </div>
    )
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resume, loading } = useFetchResumeInfo();
  const { getIcon } = useFetchTechIcon();

  return (
    <header className="bg-white/60 backdrop-blur-sm sticky top-0 z-50 border-b">
      {!loading && (
        <div className="max-w-6xl mx-auto px-6 py-[15px] flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold ">
            {resume.name}
          </Link>
          <nav className="space-x-4  hidden md:block">
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
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "hover:underline"
              }
              to="/experience"
            >
              Experience
            </NavLink> */}
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
            <div
              className="flex flex-col relative justify-center items-center cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? getIcon("x") : getIcon("menu")}
              <MenuDropdown
                data={{
                  state: menuOpen,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
