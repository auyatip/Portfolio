import { useState } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
const Projects = () => {
  const [hovering, setHovering] = useState(false);
  const [showMore, setShowMore] = useState(false);

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
                  href="https://github.com/auyatip/03_Athip_colmar_academy"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://03-athip-colmar-academy.vercel.app/"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Built a Responsive website application using HTML5 and CSS3
                  enabling great user experience requirment from "Code Academy".{" "}
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
                  Built a making the 'find my hat' game using only JavaScript to
                  learn the basics of JavaScript.
                </div>
                <p className="text-right pr-4 text-orange-300 ">JAVASCRIPT</p>
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
            className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] shadow-lg shadow-[#25ffc9] "
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
                  href="https://todo-list-git-main-auyatip.vercel.app/"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Built a "Todo list" application using React JS and React
                  Hooks. After completing several tutorials. I have learned to
                  use React much more effectively."
                </div>
                <p className="text-right pr-4 text-orange-300">
                  REACT.JS + Tailwind + reactHook
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
            className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] shadow-lg shadow-[#25ffc9]"
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
                  href="https://respon-shoping.vercel.app/"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Developed a Responsive Landing-page using ReactJS and
                  Tailwind, along with CSS and JavaScript." And use Axios with
                  JSON API to fetch data for display."
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
            className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] shadow-lg shadow-[#25ffc9] "
          >
            <img
              src={project6}
              alt="Project"
              className="w-full h-full rounded-3xl object-top p-0"
            />
            {hovering && (
              <div className="overlay absolute flex flex-col">
                <a
                  href="https://github.com/auyatip/Crypto-Search"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://crypto-search-athip.vercel.app/"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Built an application to check cryptocurrency prices, with a
                  search button to search by name, using a third-party API
                </div>
                <p className="text-right pr-4 text-orange-300">
                  REACT.JS + Axios + CryptoAPI
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
            className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] shadow-lg shadow-[#25ffc9] "
          >
            <img
              src={project7}
              alt="Project"
              className="w-full h-full rounded-3xl object-fill p-0"
            />
            {hovering && (
              <div className="overlay absolute flex flex-col">
                <a
                  href="https://github.com/auyatip/income-expenseTracker"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://income-expense-tracker-nu.vercel.app/"
                  className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                >
                  <BiLinkExternal size={30} />
                </a>
                <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                  Developed a income-expense Tracker application using
                  ReactJs.This tutorial helped me understand and use ReactJS
                  better than before
                </div>
                <p className="text-right pr-4 text-orange-300">
                  REACT.JS + ReactHook + ContextAPI
                </p>
              </div>
            )}
          </div>
        </div>
        {/* ////////////////////////////////// */}
      </div>

      {showMore ? (
        ///containner
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-around gap-20 mt-20">
          {/* Project 7 */}
          <div
            className={`card ${
              hovering ? "hovered" : ""
            } rounded-3xl glow hover:scale-110`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              data-aos="fade-up"
              className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] shadow-lg shadow-[#25ffc9] "
            >
              <img
                src={project8}
                alt="Project"
                className="w-full h-full rounded-3xl object-fill p-0"
              />
              {hovering && (
                <div className="overlay absolute flex flex-col">
                  <a
                    href="https://github.com/auyatip/frontend-Web-Blog/tree/main"
                    className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href="https://frontend-web-blog.vercel.app/"
                    className="m-5 text-[#8DDFCB] max-w-[30px] hover:text-[#8DDFCB] rounded-full glow "
                  >
                    <BiLinkExternal size={30} />
                  </a>
                  <div className="abolute text-center text-md text-gray-300 pb-1 px-2">
                    This was the first time to created a full-stack blog app
                    project, which includes user authentication, blog post
                    creation and more. (hashPassword, mongoose )
                  </div>
                  <p className="text-right pr-4 text-orange-300">
                    ReactJs + NodeJs + Express + MongoDB
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Project 8 */}
          <div
            className={`card ${
              hovering ? "hovered" : ""
            } rounded-3xl glow hover:scale-110`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              data-aos="fade-up"
              className=" flex items-center relative justify-center font-semibold  text-white rounded-3xl h-[250px] shadow-lg shadow-[#25ffc9] "
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
                    distinctio laboriosam rerum doloribus fugiat pariatur, ex
                    quae veniam sequi
                  </div>
                  <p className="text-right pr-4 text-orange-300">
                    REACT.JS + TAILWIND + RESTful API
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* ///////////////ปุ่มโชว์เพิ่มเติม */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="neno-button shadow-xl text-white border-2 my-10 hover:bg-[#284075] border-[#25ffc9] rounded-lg py-4 px-8 uppercase realative overflow-hidden"
      >
        show More
      </button>
    </div>
  );
};
export default Projects;
