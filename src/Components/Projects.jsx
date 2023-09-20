import { useState } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
const Projects = () => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      id="Projects"
      className="pt-10 flex flex-col items-center justify-center mb-20"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] animate-charcter border-b pb-7 w-full text-center font-semibold mb-20 leading-normal uppercase text-[#25ffc9] "
      >
        Projects
      </h1>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-around gap-20 ">
        {/* Project */}
        <div
          className={`card ${
            hovering ? "hovered" : ""
          } rounded-3xl glow hover:scale-110 `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            data-aos="fade-up"
            className=" flex items-center relative justify-center font-semibold text-white rounded-3xl h-[250px] min-h-[250px] shadow-lg shadow-[#25ffc9]  "
          >
            {/* รูป โปรเจค */}
            <img
              src={project1}
              alt="Project"
              className="w-full h-full rounded-3xl object-fill p-0"
            />
            {hovering && (
              <div className="overlay absolute flex flex-col ">
                <a
                  href=""
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href=""
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  distinctio laboriosam rerum doloribus fugiat pariatur, ex quae
                  veniam sequi{" "}
                </div>
                <p className="text-right pr-4 text-orange-300">HTML + CSS</p>
              </div>
            )}
          </div>
        </div>
        {/* ////////////////////////////////// */}

        {/* Project */}
        <div
          className={`card ${
            hovering ? "hovered" : ""
          } rounded-3xl glow hover:scale-110`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            data-aos="fade-up"
            className=" flex items-center flex-wrap relative justify-center font-semibold  text-white rounded-3xl h-[250px] min-h-[250px] w-full shadow-lg  shadow-blue-200 "
          >
            <img
              src={project5}
              alt="Project"
              className="w-full rounded-3xl object-fill p-0"
            />
            {hovering && (
              <div className="overlay absolute flex flex-col">
                <a
                  href="https://github.com/auyatip/gamePureJS"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://replit.com/@AUIEATIP/03Athip-find-your-hat"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  distinctio laboriosam rerum doloribus fugiat pariatur, ex quae
                  veniam sequi
                </div>
                <p className="text-right pr-4 text-orange-300">JAVASCRIPT</p>
              </div>
            )}
          </div>
        </div>

        {/* ////////////////////////////////// */}

        {/* Project */}
        <div
          className={`card ${
            hovering ? "hovered" : ""
          } rounded-3xl glow hover:scale-110`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            data-aos="fade-up"
            className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] min-h-[250px] shadow-lg shadow-[#25ffc9] "
          >
            <img
              src={project3}
              alt="Project"
              className="w-full h-full rounded-3xl object-fill p-0"
            />
            {hovering && (
              <div className="overlay absolute  flex flex-col">
                <a
                  href="https://github.com/auyatip/TodoList"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href=""
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  distinctio laboriosam rerum doloribus fugiat pariatur, ex quae
                  veniam sequi
                </div>
                <p className="text-right pr-4 text-orange-300">
                  REACT.JS + TAILWIND
                </p>
              </div>
            )}
          </div>
        </div>
        {/* ////////////////////////////////// */}

        {/* Project */}
        <div
          className={`card ${
            hovering ? "hovered" : ""
          } rounded-3xl glow hover:scale-110`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            data-aos="fade-up"
            className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] min-h-[250px] shadow-lg shadow-[#25ffc9]"
          >
            <img
              src={project2}
              alt="Project"
              className="w-full h-full rounded-3xl object-fill p-0 "
            />
            {hovering && (
              <div className="overlay absolute flex flex-col">
                <a
                  href="https://github.com/auyatip/ResponShoping"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href=""
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  distinctio laboriosam rerum doloribus fugiat pariatur, ex quae
                  veniam sequi
                </div>
                <p className="text-right pr-4 text-orange-300">
                  REACT.JS + TAILWIND + JSON API
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* ////////////////////////////////// */}

        {/* Project */}
        <div
          className={`card ${
            hovering ? "hovered" : ""
          } rounded-3xl glow hover:scale-110`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            data-aos="fade-up"
            className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] min-h-[250px] shadow-lg shadow-[#25ffc9] "
          >
            <img
              src={project4}
              alt="Project"
              className="w-full h-full rounded-3xl object-fill p-0"
            />
            {hovering && (
              <div className="overlay absolute flex flex-col">
                <a
                  href="https://github.com/auyatip/ReactCRUD"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://react-crud-roan.vercel.app/"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  distinctio laboriosam rerum doloribus fugiat pariatur, ex quae
                  veniam sequi
                </div>
                <p className="text-right pr-4 text-orange-300">
                  REACT.JS + TAILWIND + RESTful API
                </p>
              </div>
            )}
          </div>
        </div>
        {/* ////////////////////////////////// */}
      </div>
    </div>
  );
};
export default Projects;
