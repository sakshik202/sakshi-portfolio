"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Wipro,
  Figmd,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Figmd}
              title="FIGmd India Pvt. Ltd"
              subtitle="Software Developer"
              date="December 2017 - September 2020"
              para="- Handled the enhancement of web applications as a Full Stack Developer and collaborated with technical operations teams to quickly resolve customer-impacting issues."
            />
            <Exp_prop
              img={Wipro}
              title="Wipro Ltd"
              subtitle="Software Engineer"
              date="October 2022 - present"
              para="- Developed MERN stack applications, led the training and onboarding of new team members, conducted technical interviews, prepared coding assessments to evaluate candidates' skills."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
