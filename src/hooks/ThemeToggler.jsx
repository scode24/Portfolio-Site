import { useEffect, useState } from "react";

const useThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    console.log("clicked");
    setDarkMode(!darkMode);
  };

  return { toggleTheme, darkMode };
};

export default useThemeToggler;
