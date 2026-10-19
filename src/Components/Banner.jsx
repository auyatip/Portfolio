import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";
import File from "../assets/CV_Athip.pdf";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      id="Home"
      className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 py-24 lg:py-36 text-center flex items-center justify-center"
    >
      <div className="w-full flex flex-col justify-center items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 leading-tight uppercase m-auto"
        >
          Athip Thumakul
        </h1>
        <p data-aos="fade-left" className="max-w-3xl text-lg lg:text-2xl">
          <span className="text-orange-200">Full-Stack Software Engineer</span>{" "}
          building production-ready logistics and ERP systems with 2.5+ years of experience.
          <p className="mt-3">
            I work across backend architecture, APIs, databases, integrations, and frontend delivery. Get in touch through{" "}
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              className="font-bold text-[#8DDFCB] underline uppercase cursor-pointer hover:text-orange-200"
            >
              Contact Me
            </Link>{" "}
            Thank you.
          </p>
        </p>
        <div className="flex flex-wrap justify-center mt-8 gap-3">
          <Link to="Projects" smooth className="px-5 py-3 rounded-lg border-2 border-[#25ffc9] text-[#25ffc9] font-semibold hover:bg-[#25ffc9] hover:text-slate-950 transition uppercase cursor-pointer">
            View Projects
          </Link>
          <a href={File} download="Athip-Thumakul-Resume.pdf" className="px-5 py-3 rounded-lg bg-[#25ffc9] text-slate-950 font-semibold hover:bg-white transition uppercase">
            Download CV
          </a>
        </div>
        <div className="flex mt-5 gap-2">
          <div className="flex item-center justify-center">
            <div className="flex space-x-3 ">
              <a
                href="https://github.com/auyatip?tab=repositories"
                target="_blank"
                className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2" rel="noreferrer"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/athip-thumakul/"
                target="_blank"
                className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2" rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="mailto:atipthummakul@gmail.com"
                target="_blank"
                className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2" rel="noreferrer"
              >
                <AiOutlineMail size={30} />
              </a>
              {/* <a
                href=""
                className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2"
              >
                <AiOutlineSlack size={30} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
