const highlights = [
  "Develop and maintain CRM and business management modules for customer profiles, communication history, order operations, claims, payments, commissions, and service workflows.",
  "Reduced parcel-tracking query time by 40% through API optimization, database improvements, and Redis caching.",
  "Designed database schemas and backend workflows for customers, contacts, service records, pricing plans, payment operations, audit logging, and scheduled processes.",
  "Built LINE Official Account integrations for real-time chat, notifications, webhooks, customer linking, and communication workflows.",
  "Implemented bulk client-payment processing supporting up to 500 records per operation.",
  "Developed audit and security features covering administrator activities, login history, devices, IP addresses, and browsers.",
  "Integrated cloud storage, external platforms, and payment providers while collaborating with business analysts, QA, and operations teams.",
];

const previousRoles = [
  {
    title: "Software Developer",
    company: "TechEx Co., Ltd.",
    period: "November 2023 – January 2025",
    location: "Bangkok, Thailand",
    points: [
      "Delivered custom SaaS and logistics applications using Next.js, React, Node.js, Golang, and REST APIs.",
      "Designed production data models and integrations across MongoDB, PostgreSQL, MySQL, Google Maps, SMS, and email services.",
      "Built multi-courier booking and distribution-center workflows for parcel scanning, routing, and delivery operations.",
  "Developed admin systems for customer management, service assignment, pricing, installment configuration, product management, advertisements, and service branches.",
      "Implemented member-management and e-KYC APIs for integration between web and mobile applications.",
    ],
  },
  {
    title: "Junior Software Developer – Bootcamp Cohort 5",
    company: "Generation Thailand",
    period: "July 2023 – October 2023",
    location: "Bangkok, Thailand",
    points: [
      "Completed a 15-week, full-time software development bootcamp supported by Microsoft Thailand and the Ministry of Higher Education, Science, Research and Innovation.",
      "Built full-stack MERN applications using React, Node.js, MongoDB, SQL, Git, and Agile practices.",
    ],
  },
  {
    title: "Aircraft Engineer",
    company: "Directorate of Aeronautical Engineering, Royal Thai Air Force",
    period: "June 2021 – July 2023",
    location: "Thailand",
    points: [
      "Repaired and modified aircraft structures under regulated safety, quality, and technical documentation procedures.",
      "Developed strong troubleshooting, cross-functional teamwork, and operational responsibility in a safety-critical environment.",
    ],
  },
];

const Experience = () => (
  <section id="Experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20 text-white overflow-hidden">
    <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold animate-charcter uppercase mb-10 lg:mb-12 leading-tight break-words">
      Professional Experience
    </h2>
    <article className="w-full max-w-5xl mx-auto border-l-2 border-[#25ffc9] pl-4 sm:pl-6 lg:pl-10 break-words">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-1 lg:gap-2 mb-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#25ffc9] leading-tight">Full-Stack Software Developer</h3>
        <span className="text-sm sm:text-base text-slate-300 shrink-0">February 2025 – Present</span>
      </div>
      <p className="text-lg font-semibold mb-5">NexT Corporate Co., Ltd. · Bangkok, Thailand</p>
      <ul className="space-y-3 text-slate-200 text-sm sm:text-base lg:text-lg list-disc pl-4 sm:pl-5 break-words">
        {highlights.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
    <div className="w-full max-w-5xl mx-auto mt-12 space-y-10 break-words">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#25ffc9]">Previous Experience</h3>
      {previousRoles.map((role) => (
        <article key={role.title} className="w-full border-l-2 border-slate-600 pl-4 sm:pl-6 lg:pl-10 break-words">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-1 lg:gap-2">
            <h4 className="text-lg sm:text-xl font-semibold leading-tight">{role.title}</h4>
            <span className="text-sm sm:text-base text-slate-300 shrink-0">{role.period}</span>
          </div>
          <p className="text-[#8DDFCB] font-semibold">{role.company} · {role.location}</p>
          <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-300 list-disc pl-4 sm:pl-5 break-words">
            {role.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      ))}
    </div>
    <div className="w-full max-w-5xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 break-words">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#25ffc9] mb-4">Education</h3>
        <p className="font-semibold">Bachelor of Information and Communication Technology</p>
        <p className="text-slate-300">Sukhothai Thammathirat Open University · 2022 – June 2025</p>
        <p className="font-semibold mt-4">Diploma in Aircraft Maintenance</p>
        <p className="text-slate-300">Civil Aviation Training Center · 2018 – 2021</p>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#25ffc9] mb-4">Certification & Languages</h3>
        <p className="font-semibold">Junior Software Developer Program, Cohort 5</p>
        <p className="text-slate-300">Generation Thailand · 2023</p>
        <p className="mt-4"><span className="font-semibold">English:</span> Intermediate working proficiency</p>
        <p><span className="font-semibold">Thai:</span> Native</p>
      </div>
    </div>
  </section>
);

export default Experience;
