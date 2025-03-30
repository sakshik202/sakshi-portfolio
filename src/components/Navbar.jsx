import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (mediaQuery.matches || theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);


  const handleChange = (e) => {
    handleTheme(e.matches ? "dark" : "light");
  };

  mediaQuery.addEventListener('change', handleChange);
  
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="NAVBAR flex  justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:text-green-500 max-sm:text-2xl"
            >
              {"<Anup/>"}
            </a>
          </div>
          <div className="NAVLINKS text-[20px] translate-x-[80px] max-sm:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1] ">
            <a href="#about" className=" hover:text-cyan-500">
              Home
            </a>
            <a href="#experience" className="hover:text-cyan-500">
              Experience
            </a>
            <a href="#education" className="hover:text-cyan-500 ">
              Education
            </a>
            <a href="#projects" className="hover:text-cyan-500 ">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-500 ">
              Contact
            </a>
          </div>

          <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiSun className="-translate-y-1 text-2xl text-yellow-300" />
              ) : (
                <HiMoon className="-translate-y-1 text-2xl" />
              )}
            </button>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};
export default Navbar;
