import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 righ-0 z-10 bg-slate-900 transition">
        <ul className="text-center text-xl p-20 ">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded uppercase">
              HOME
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded uppercase">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded uppercase">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded uppercase">
              Service
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded uppercase">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <div className="h-10vh flex justify-between z-50  text-white fixed w-full  lg:py-2 lg:bg-slate-800 px-20 xl:px-20 py-4 broder-b border-slate-800 ">
        <div className="flex items-center align-center flex-1 sm:px-10 lg:py-5">
          <span className="text-sm text-[#25ffc9] fixed z-10">
            {" "}
            <p className="shadow-sm rounded-full animate-charcter px-1  shadow-[#25ffc9]">
              {date.toLocaleTimeString()}{" "}
            </p>
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden  right-0 z-10">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16  text-[20px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-[#25ffc9] hover:border-[#25ffc9] hover:scale-110 cursor-pointer uppercase">
                  HOME
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-[#25ffc9] hover:border-[#25ffc9] hover:scale-110 cursor-pointer uppercase">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-[#25ffc9] hover:border-[#25ffc9] hover:scale-110 cursor-pointer uppercase">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-[#25ffc9] hover:border-[#25ffc9] hover:scale-110 cursor-pointer uppercase">
                  Services
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-[#25ffc9] hover:border-[#25ffc9] hover:scale-110 cursor-pointer uppercase">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div>{click && content}</div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes size={35} /> : <CiMenuFries size={35} />}
        </button>
      </div>
    </div>
  );
};
export default Nav;
