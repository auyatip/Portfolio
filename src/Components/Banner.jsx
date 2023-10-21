import { AiFillGithub, AiOutlineSlack } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import img from "../assets/profile.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const [wobble, setWobble] = useState(0);

  return (
    <div
      id="Home"
      className="lg:px-30 xl:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal  uppercase m-auto"
        >
          <Typewriter
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#8DDFCB",
              fontWeight: 500,
              fontSize: "1.5em",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome To My Profile")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Athip Thumakul")
                .start();
            }}
          />
        </h1>
        <p data-aos="fade-left" className="text-lg lg:text-2xl">
          <span className="text-orange-200 ">
            Hello , I'm Software Developer.{" "}
          </span>
          I'm passionate about software development and technology. Let's
          explore new projects and ideas together!
          <p>
            Please reply to my emails using{" "}
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              className="font-bold text-[#8DDFCB] underline uppercase cursor-pointer hover:text-orange-200"
            >
              "Contact Me"
            </Link>{" "}
            Thank you.
          </p>
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex item-center justify-center">
            <div className="flex space-x-3 ">
              <a
                href="https://github.com/auyatip?tab=repositories"
                target="_blank"
                className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/athip-thumakul/"
                target="_blank"
                className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="mailto:atipthummakul@gmail.com"
                target="_blank"
                className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2"
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
      <img
        data-aos="zoom-in"
        src={img}
        width={350}
        height={350}
        className="image cursor-pointer contain rounded-full border-2 p-1 border-[#8DDFCB] img_glow lg:w-[600px]"
        alt="Profile"
        onClick={() => setWobble(1)}
        onAnimationEnd={() => setWobble(0)}
        wobble={wobble}
      />
    </div>
  );
};
export default Banner;
