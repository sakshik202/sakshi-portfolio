/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";

import Sakshi_Photo from "../assets/SakshiPhoto.jpeg";
import Sakshi_Resume from "../assets/Sakshi_Resume.pdf";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins'] max-sm:p-2"
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              sakshi khanapure
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Software Engineer - Elata Technologies. <br />
              Dallas, Texas, United States
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/sakshik202"
                className="hover:text-slate-500 dark:hover:text-sky-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sakshi-khanapure-8696512b7/"
                className="hover:text-slate-500 dark:hover:text-sky-300"
              >
                <SiLinkedin />
              </a>
              <a
                href="mailto:sakshi.khanapure20@gmail.com"
                className="hover:text-slate-500 dark:hover:text-sky-300"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <a href={Sakshi_Resume} download>
                <button className="py-3 px-4 bg-gradient-to-t dark:from-green-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded">
                  Resume
                </button>
              </a>
            </div>
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={Sakshi_Photo}
              alt="sakshi khanapure"
              className="w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px] object-cover rounded-full border-[#00040fab] dark:border-slate-300 border-4 mt-12"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
