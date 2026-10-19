import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import orderImage from "../assets/order.jpg";
import athipHouse from "../assets/athip-house.jpg";
import doctorSchedules from "../assets/doctor-scedules.jpg";

const work = [
  {
    title: "NestJS + PostgreSQL API",
    description: "Backend API project focused on NestJS and PostgreSQL, with service orchestration, query parameters, caching strategy, testing, and production-minded architecture.",
    stack: "NestJS · TypeScript · PostgreSQL · REST API",
    github: "https://github.com/auyatip/Nestjs-PostgreSQL",
  },
  {
    title: "Doctor Schedule",
    description: "Responsive healthcare scheduling interface built with a modern Next.js and TypeScript stack.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    image: doctorSchedules,
    github: "https://github.com/auyatip/Frontend-Doctor-Scedules",
    demo: "https://frontend-doctor-scedules.vercel.app",
  },
  {
    title: "Web Ordering Application",
    description: "Full-stack ordering application with product management for admin users and a responsive customer-facing experience.",
    stack: "React · Node.js · Express · MongoDB",
    image: orderImage,
    github: "https://github.com/auyatip/Frontend-Web-Ordering",
    demo: "https://frontend-web-ordering.vercel.app",
  },
  {
    title: "A-Thip House @ Pai",
    description: "Production-ready resort landing page with room details, gallery, booking CTAs, SEO metadata, and mobile-first design.",
    stack: "Next.js · TypeScript · Tailwind CSS · SEO",
    image: athipHouse,
    github: "https://github.com/auyatip/resort-landing-page",
    demo: "https://www.athiphousepai.com/",
  },
];

const orderedWork = [work[3], work[1], work[2], work[0]];

const FeaturedWork = () => (
  <section id="Projects" className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 py-16">
    <h2 className="text-4xl sm:text-5xl animate-charcter border-b pb-5 w-full text-center font-semibold mb-5 uppercase">
      Featured Work
    </h2>
    <p className="max-w-2xl mx-auto text-center text-slate-300 mb-12">
      A selection of projects that demonstrates my experience across backend systems, APIs, databases, and modern frontend delivery.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {orderedWork.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 shadow-lg hover:border-[#25ffc9] transition">
          {item.image && (
            <img src={item.image} alt={`${item.title} project preview`} className="w-full h-52 object-cover" loading="lazy" />
          )}
          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#25ffc9]">{item.title}</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">{item.description}</p>
            <p className="mt-4 text-sm text-orange-200">{item.stack}</p>
            <div className="flex flex-wrap gap-4 mt-5">
              <a href={item.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#8DDFCB] hover:text-white">
                <FaGithub /> GitHub
              </a>
              {item.demo && (
                <a href={item.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#8DDFCB] hover:text-white">
                  <BiLinkExternal /> Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedWork;
