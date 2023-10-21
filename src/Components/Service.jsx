import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoReact, BiLogoMongodb } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { SiMysql, SiPostman, SiAdobe } from "react-icons/si";
import { useState } from "react";
const Service = () => {
  const [troggle1, setTroggle1] = useState(false);
  const [troggle2, setTroggle2] = useState(false);
  const [troggle3, setTroggle3] = useState(false);
  const [troggle4, setTroggle4] = useState(false);
  const [troggle5, setTroggle5] = useState(false);
  const [troggle6, setTroggle6] = useState(false);
  const [troggle7, setTroggle7] = useState(false);
  const [troggle8, setTroggle8] = useState(false);
  const [troggle9, setTroggle9] = useState(false);
  const [troggle0, setTroggle0] = useState(false);

  return (
    <div
      id="Services"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] animate-charcter border-b pb-2 w-full text-center font-semibold mb-20 leading-normal uppercase text-[#25ffc9] "
      >
        Technical
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 items-center gap-20">
        <div
          data-aos="fade-up"
          className=" flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-orange-500  h-36 w-64 border-2  border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle1(!troggle1)}
        >
          {troggle1 ? (
            <div className="text-3xl">HTML5</div>
          ) : (
            <AiFillHtml5 size={100} className="z-10" />
          )}
        </div>
        <div
          data-aos="fade-down"
          className=" flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-blue-600 h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle2(!troggle2)}
        >
          {troggle2 ? (
            <div className="text-3xl">CSS3</div>
          ) : (
            <IoLogoCss3 size={100} />
          )}
        </div>
        <div
          data-aos="fade-up"
          className=" flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-yellow-400 h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle3(!troggle3)}
        >
          {troggle3 ? (
            <div className="text-3xl">JAVASCRIPT</div>
          ) : (
            <TbBrandJavascript size={100} />
          )}
        </div>
        <div
          data-aos="fade-down"
          className=" flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-[#25ffc9] h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle4(!troggle4)}
        >
          {troggle4 ? (
            <div className="text-3xl">REACT.JS</div>
          ) : (
            <BiLogoReact size={100} />
          )}
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-green-600 h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle5(!troggle5)}
        >
          {troggle5 ? (
            <div className="text-3xl">NODE.JS</div>
          ) : (
            <FaNode size={100} />
          )}
        </div>
        <div
          data-aos="fade-down"
          className=" flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-green-600 h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle6(!troggle6)}
        >
          {troggle6 ? (
            <div className="text-3xl">MONGO DB</div>
          ) : (
            <BiLogoMongodb size={100} />
          )}
        </div>
        <div
          data-aos="fade-up"
          className="hidden lg:flex justify-center items-center font-semibold rounded-3xl rounded-tl-none text-orange-500 h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle7(!troggle7)}
        >
          {troggle7 ? (
            <div className="text-3xl text-center">GIT VERSION CONTROL</div>
          ) : (
            <BsGit size={100} />
          )}
        </div>
        <div
          data-aos="fade-down"
          className="hidden lg:flex  items-center justify-center font-semibold rounded-3xl rounded-tl-none text-blue-400 text-bold h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle8(!troggle8)}
        >
          {troggle8 ? (
            <div className="text-3xl">MYSQL SERVER</div>
          ) : (
            <SiMysql size={100} />
          )}
        </div>
        <div
          data-aos="fade-up"
          className="hidden lg:flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-orange-500 h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle9(!troggle9)}
        >
          {troggle9 ? (
            <div className="text-3xl">POSTMAN</div>
          ) : (
            <SiPostman size={100} />
          )}
        </div>
        <div
          data-aos="fade-down"
          className="hidden xl:flex items-center justify-center font-semibold rounded-3xl rounded-tl-none text-red-500 h-36 w-64 border-2 border-[#25ffc9]  cursor-pointer b_glow"
          onClick={() => setTroggle0(!troggle0)}
        >
          {troggle0 ? (
            <div className="text-3xl text-center">
              Photoshop , Illustrator , ..
            </div>
          ) : (
            <SiAdobe size={100} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Service;
