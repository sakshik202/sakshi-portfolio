import Project_prop from "./Project_prop";
import {
  Apple,
  ABFM,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiJest,
  SiGraphql,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Support Site"
            para="Developed a multilingual web application for support.apple.com, serving 50+ million users with access to support and billing information."
            img={Apple}
            link="https://support.apple.com"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="Node Js" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            typescript={
              <Tooltip title="TypeScript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            jest={
              <Tooltip title="Jest" arrow>
                <IconButton>
                  <SiJest className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="SEO Manager"
            para="Developed an internal web application for Apple Engineers to eciently update product metadata on the Apple Online Store, optimizing the approval workow and enhancing transparency"
            img={Apple}
            link=""
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="Node Js" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            typescript={
              <Tooltip title="TypeScript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="American Board of Family Medicine (ABFM)"
            para="Developed a web application for U.S. hospitals to submit MIPS data, enabling medical boards to track healthcare worker performance and determine compensation"
            img={ABFM}
            link=""
            nodejs={
              <Tooltip title="Node Js" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            typescript={
              <Tooltip title="TypeScript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            jest={
              <Tooltip title="Jest" arrow>
                <IconButton>
                  <SiJest className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            graphql={
              <Tooltip title="GraphQL" arrow>
                <IconButton>
                  <SiGraphql className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
