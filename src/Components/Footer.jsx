import Contact from "./Contact";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 sm:p-10 lg:px-12 xl:px-20 border-gray-500 border-t"
          >
            <div className="sm:inline flex-1 pl-1">
              <span className="font-semibold text-[#8DDFCB] underline">
                MR. ATHIP
              </span>
              <p>
                I'm live in Thailand. <br />
                I'm excited to meet you and work with you.💙
              </p>
            </div>
            <div className="sm:inline flex-1 pl-4">
              <h2 className="font-semibold uppercase text-[#8DDFCB] underline">
                Skills
              </h2>
              <ul>
                <li>Full-Stack Development</li>
                <li>Logistics Systems</li>
                <li>API &amp; Database Architecture</li>
              </ul>
            </div>
            <div className="flex-1 pl-4">
              <h2 className="font-semibold uppercase text-[#8DDFCB] underline">
                Contact
              </h2>
              <p>Email: athipthummakul@gmail.com</p>
              <p>Phone: 094-676-5524</p>
            </div>

            <div className="flex-1 pl-4">
              <h2 className="font-semibol uppercase text-[#8DDFCB] underline">
                Link to me
              </h2>
              <div className="flex gap-3 mt-1">
                <a
                  href="https://github.com/auyatip?tab=repositories"
                  target="_blank"
                  className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2" rel="noreferrer"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/athip-thumakul/"
                  target="_blank"
                  className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2" rel="noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:atipthummakul@gmail.com"
                  target="_blank"
                  className="text-[#8DDFCB] hover:text-[#8DDFCB] rounded-full glow p-2" rel="noreferrer"
                >
                  <AiOutlineMail size={20} />
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
