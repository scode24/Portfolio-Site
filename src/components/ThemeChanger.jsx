import useFetchTechIcon from "../hooks/FetchTechIcon";
import useThemeToggler from "../hooks/ThemeToggler";

const ThemeChanger = () => {
  const { toggleTheme, darkMode } = useThemeToggler();
  const { getIcon } = useFetchTechIcon();

  return (
    <div
      className="flex flex-col justify-center items-center cursor-pointer w-min mx-5"
      onClick={() => toggleTheme()}
    >
      {darkMode ? getIcon("light") : getIcon("dark")}
    </div>
  );
};

export default ThemeChanger;
