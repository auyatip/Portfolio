import Contact from "./Contact";
import { AiOutlineSlack } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGoogle } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 mb-5 h-100 w-full text-white">
      <div className=" bottom-0 left-0 w-full h-full overflow-hidden">
        <div className="custom-shape-divider-top-1687544491">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <Contact />
          </div>

          <div data-aos="fade-up" className="flex p-10 pt-10 lg:pl-20 xl:pl-40 border-gray-500 border-t">
            <div className="hidden sm:inline flex-1 pl-1">
              <span className="font-semibold text-[#8DDFCB] underline">
                MR. ATHIP
              </span>
              <p>
                I'm staying in Thailand. <br />
                I'm excited to meet you and work with you.💙
              </p>
            </div>
            <div className="hidden sm:inline flex-1 pl-4">
              <h2 className="font-semibold uppercase text-[#8DDFCB] underline">
                Services
              </h2>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Git Control</li>
                <li>Database</li>
              </ul>
            </div>
            <div className="flex-1 pl-4">
              <h2 className="font-semibold uppercase text-[#8DDFCB] underline">
                Contact
              </h2>
              <p>Email: athipthummakul@gmail.com</p>
              <p>Phone: +66 0 123 1234</p>
            </div>

            <div className="flex-1 pl-4">
              <h2 className="font-semibol uppercase text-[#8DDFCB] underline">
                Link to me
              </h2>
              <div className="flex gap-3 mt-1">
                <a href="">
                  <FaGithub size={20} />
                </a>
                <a href="">
                  <FaLinkedin size={20} />
                </a>
                <a href="">
                  <BiLogoGoogle size={20} />
                </a>
                <a href="">
                  <AiOutlineSlack size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
