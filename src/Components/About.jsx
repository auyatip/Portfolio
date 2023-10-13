import { useState } from "react";
import cv from "../assets/cv.jpg";
const About = () => {
  const [showCV, setShowCV] = useState(false);
  return (
    <div
      id="About"
      className="lg:px-30 xl:px-56 px-10 lg:pb-10 xl:py-0 py-20 text-center gap-5 lg:text-start flex xl:flex-row flex-col-reverse justify-between xl:gap-28 items-center"
    >
      {showCV ? (
        <a
          href="https://drive.google.com/file/d/1s6-8aW339Gc_Ye56GDrsQ_FRdaSwB2jL/view?usp=sharing"
          className="hover:scale-110 duration-500"
        >
          <img
            data-aos="fade-down"
            src={cv}
            className="rounded border-2 p-1 border-[#8DDFCB] img_glow min-w-[350px] md:w-[500px] lg:w-[600px] lg:mt-10"
            alt="Resume"
          />
        </a>
      ) : (
        ""
      )}
      <div className="h-full xl:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1
          data-aos="fade-right"
          className="text-[52px] animate-charcter border-b w-full font-semibold mb-8 leading-normal text-[#25ffc9] uppercase"
        >
          About Me
        </h1>
        <div className="text-lg lg:text-2xl">
          <p data-aos="fade-left">
            "I completed Generation's Junior Software Developer Bootcamp and I
            need a role as a Software Developer. During the bootcamp, I gained
            experience as a Junior Software Developer and began developing in
            MERN Stack development. I also learned about career swicher behavior
            and mindset adapting to real work situations. I’m really passionate
            for create somthing new So I'm excited to apply my skills to
            contribute to technology-focused businesses and make use of the new
            technical abilities I've acquired <br />
            <br />
            <p>
              {" "}
              and so I have to learned about (BSM) behavior and mindset adapting
              to in real work situations.
            </p>
            <span>
              I'm excited to apply my skills to contribute to technology-focused
              businesses and make use of the new technical abilities I've
              acquired."
            </span>
          </p>
        </div>

        <div className="flex mt-8 gap-2">
          <div className="flex item-center justify-center">
            <div className="flex space-x-3">
              <button
                onClick={() => setShowCV(!showCV)}
                className="neno-button shadow-xl text-white border-2 hover:bg-[#284075] border-[#25ffc9] rounded-lg py-4 px-8 uppercase realative overflow-hidden"
              >
                show Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
