import { createContext, useEffect, useState } from "react";
// import useStoreState from "../hooks/useStoreState";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const htmlTag = document.documentElement;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        htmlTag.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        htmlTag.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
