import Lottie from "lottie-react";
import education from "../assets/lottie/Education.json";
import College from "../assets/UTA.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-10 font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
          <div class="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div class="flex gap-5">
              <img src="/src/assets/kncoe.jpeg" alt="" class="w-[90px] h-[90px]" />
              <h1 class="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">Kashibai nawale college of engineering, Pune</h1>
            </div>
            <div class="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 class="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">Bachelor</h3>
              <p class="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">July 2018 - May 2022</p>
              <p class="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">Electronics and Telecommunication</p>
            </div>
          </div>
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={College}
                alt=""
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
                University of Texas, Arlington
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Masters
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Jan 2024 - Dec 2025
              </p>

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Computer Science
              </p>
            </div>
          </div>

          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </div>
    </section>
  );
};
export default Education;
