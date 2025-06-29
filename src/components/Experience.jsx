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
              title="Elata Technologies"
              subtitle="Software Developer"
              date="August 2022 - November 2023"
              para="-  Automated infrastructure with Python, Ansible, and Terraform; deployed scalable containerized applications on AWS EKS; maintained CI/CD pipelines with Jenkins to ensure smooth, secure releases."
            />
            <Exp_prop
              img={Wipro}
              title="Elata Technologies"
              subtitle="Software Engineer Intern"
              date="September 2019 - March 2020"
              para="- Built dynamic web apps using AngularJS and SQL, writing optimized database queries and managing version control with Git. Automated deployment and routine tasks using Bash and Python scripts to streamline development."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
