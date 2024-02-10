import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="dark:bg-slate-700 dark:text-slate-50 bg-white text-slate-900 shadow-md">
      <div className="container min-h-16 flex items-center justify-between">
        <div>
          <p className="dark:text-slate-100 text-slate-900 font-bold">
            Where in the world?
          </p>
        </div>
        <div>
          <button
            className="flex items-baseline gap-2 text-slate-900 dark:text-slate-100"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <IoMoonOutline className="text-slate-100 duration-700" />
            ) : (
              <IoMoon className="text-slate-900 duration-700" />
            )}
            {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
