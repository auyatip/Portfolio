import cv from "../assets/cv.jpg";
import File from "../assets/CV_Athip.pdf";
const About = () => {
  const showCV = true;
  return (
    <div
      id="About"
      className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 lg:pb-10 xl:py-0 py-16 text-center gap-8 lg:text-start flex xl:flex-row flex-col-reverse justify-between xl:gap-16 items-center"
    >
      {showCV ? (
        <a
          href="https://drive.google.com/file/d/1-uf2QekUiRHoCGtNaicLaEUSVg3MSyHc/view?usp=sharing"
          className="hover:scale-110 duration-500"
        >
          <img
            data-aos="fade-down"
            src={cv}
            className="rounded border-2 p-1 border-[#8DDFCB] img_glow w-full max-w-sm md:max-w-lg lg:max-w-xl lg:mt-10"
            alt="Resume"
          />
        </a>
      ) : (
        ""
      )}
      <div className="h-full xl:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1
          data-aos="fade-right"
          className="text-4xl sm:text-5xl animate-charcter border-b w-full font-semibold mb-8 leading-normal text-[#25ffc9] uppercase"
        >
          About Me
        </h1>
        <div className="text-lg lg:text-2xl">
          <p data-aos="fade-left">
            I am a backend-focused Full-Stack Software Engineer with 3 years of experience building production logistics and ERP platforms. I design reliable APIs, data models, workflows, and integrations for real business operations. <br />
            <br />
            <p>
              {" "}
              I have worked on order booking, warehouse operations, parcel tracking, claims, payments, commissions, and delivery workflows.
            </p>
            <span>
              I’m really passionate for create somthing new. I'm excited to
              apply my skills to contribute to technology-focused businesses and
              make use of the new technical abilities I've acquired.
            </span>
          </p>
        </div>

        <div className="flex mt-8 gap-2">
          <div className="flex item-center justify-center">
            <div className="flex space-x-3">
              <a href={File} download="Athip-Thumakul-Resume.pdf" target="_blank" rel="noreferrer">
                  <button className="neno-button shadow-xl text-white border-2 hover:bg-[#284075] border-[#25ffc9] rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
