import house from "./assets/athip-house.jpg";
import doctor from "./assets/doctor-scedules.jpg";
import order from "./assets/order.jpg";
import eduflowLogin from "./assets/project-flow-authen1.png";
import eduflowPermissions from "./assets/project-flow-authen2.png";

export const projects = [
  {
    slug: "athip-house",
    title: "A-Thip House @ Pai",
    category: "Hospitality · Frontend",
    image: house,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    description:
      "A welcoming digital home for a Pai resort, built around rooms, discovery, and booking.",
    github: "https://github.com/auyatip/resort-landing-page",
    demo: "https://www.athiphousepai.com/",
    problem:
      "Present room information and the property experience in a clear, mobile-friendly website with a direct path to booking.",
    solution:
      "A resort landing page that brings room details, a photo gallery, and booking calls to action into one responsive experience.",
    architecture: [
      "Next.js presentation layer",
      "Room details & photo gallery",
      "Booking calls to action",
    ],
    role: "Frontend implementation, mobile-first layouts, and SEO metadata for the resort landing page.",
    results:
      "Delivered a public resort website with room details, a gallery, booking calls to action, and SEO metadata. Booking conversion and traffic measurements are not available.",
  },
  {
    slug: "eduflow",
    title: "EDUFLOW",
    category: "Education · Student management",
    image: eduflowLogin,
    gallery: [{ image: eduflowPermissions, caption: "Role and permission matrix" }],
    stack: ["Next.js", "MySQL"],
    description:
      "An education workspace for student information, user management, and role-based access permissions.",
    github: "",
    demo: "https://the-demo-flow-production.up.railway.app/",
    problem:
      "Bring student information and team access controls together in an organized education workspace.",
    solution:
      "A student-management interface with demo sign-in for administrators and staff, user management, and a permission matrix organized by role and action.",
    architecture: [
      "Administrator and staff sign-in",
      "Student and user management workspace",
      "Role and permission matrix",
    ],
    role: "Project details are being prepared.",
    results:
      "The project preview presents demo sign-in and role management with selectable permissions. Usage and performance measurements are not yet documented.",
  },
  {
    slug: "doctor-schedule",
    title: "Doctor Schedule",
    category: "Healthcare · Frontend",
    image: doctor,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A responsive healthcare scheduling interface with a focused, modern frontend.",
    github: "https://github.com/auyatip/Frontend-Doctor-Scedules",
    demo: "https://frontend-doctor-scedules.vercel.app",
    problem:
      "Make healthcare scheduling information usable across desktop and mobile screen sizes.",
    solution:
      "A responsive scheduling interface implemented with Next.js, TypeScript, and Tailwind CSS.",
    architecture: [
      "Next.js interface",
      "TypeScript components",
      "Responsive Tailwind layouts",
    ],
    role: "Frontend development of the healthcare scheduling interface.",
    results:
      "Delivered a responsive scheduling interface and a publicly linked demo. No usage, time-saving, or performance measurements are documented.",
  },
  {
    slug: "web-ordering",
    title: "Web Ordering Application",
    category: "Commerce · Full stack",
    image: order,
    stack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "A full-stack ordering experience connecting customer browsing with admin product management.",
    github: "https://github.com/auyatip/Frontend-Web-Ordering",
    demo: "https://frontend-web-ordering.vercel.app",
    problem:
      "Support customer-facing food ordering alongside product management for administrators.",
    solution:
      "A full-stack application with a responsive customer experience and product creation for admin users.",
    architecture: [
      "React customer & admin UI",
      "Node.js / Express backend",
      "MongoDB persistence",
    ],
    role: "Full-stack development across the customer interface and admin product-management functionality.",
    results:
      "Implemented responsive ordering and admin product management. Transaction volume and conversion measurements are not documented.",
  },
  {
    slug: "nestjs-postgresql",
    title: "NestJS + PostgreSQL API",
    category: "Backend · Architecture",
    image: "",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "REST API"],
    description:
      "A backend project exploring service orchestration, query handling, caching, and testing.",
    github: "https://github.com/auyatip/Nestjs-PostgreSQL",
    demo: "",
    problem:
      "Structure a backend API around service orchestration, database queries, and production-minded practices.",
    solution:
      "A NestJS and PostgreSQL project focused on query parameters, caching strategy, testing, and service organization.",
    architecture: [
      "REST API / query parameters",
      "NestJS service orchestration",
      "PostgreSQL data layer",
    ],
    role: "Backend API development with NestJS, TypeScript, and PostgreSQL.",
    results:
      "Created an API project covering service orchestration, query parameters, caching strategy, and testing. No benchmark results are documented.",
  },
];
