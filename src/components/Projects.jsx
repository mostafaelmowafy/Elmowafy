import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      title: "ShopiWafy E-commerce",
      description:
        "A responsive e-commerce platform where users can browse and place orders, with admin dashboard to manage orders, update their status, and view all users. Built with React.js and Supabase, and real-time data updates.",
      image: "/images/shopiwafy.jpeg",
      tech: ["React.js", "Tailwind CSS", "Supabase", "Netlify"],
      link: "https://shopiwafy.netlify.app/",
    },
    {
      title: "The Wild Osis",
      description:
        "A hotel dashboard for managing bookings, cabins, and statistics (React, Supabase). Built for desktop use only, with Dark Mode, authentication, sorting, and reusable component patterns.",

      image: "/images/the-wild-oasis.jpeg",
      tech: ["React.js", "Styled Components", "Supabase", "Netlify"],
      link: "https://a-hotel-wild-oasis.netlify.app/",
    },
    {
      title: "Perhaps You Will Be Guided",
      description:
        "A religious website that shares Prophet stories, live Quran radio, and diverse Islamic Q&A.",
      image: "/images/perhaps-you-will-be-guided.jpeg",
      tech: ["React.js", "CSS Modules", "Vercel"],
      link: "https://perhaps-you-will-be-guided.vercel.app/",
    },
    {
      title: "To-Do List App",
      description: "It's like to do list for task manager.",
      image: "/images/to-do-list.jpeg",
      tech: ["React.js", "CSS Modules", "Vercel"],
      link: "https://kanban-task-management-beige.vercel.app/",
    },
    {
      title: "HooBank App",
      description: "Simple banking landing page (HTML, CSS, JS).",
      image: "/images/hoobank.jpeg",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      link: "https://mostafaelmowafy.github.io/HooBank/",
    },
    {
      title: "Portfolio Website",
      description: " Old personal site with contact and projects Info & Links.",
      image: "/images/portfolio.jpeg",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      link: "https://mostafaelmowafy.github.io/Portfolio/",
    },
  ];

  return (
    <div id="Projects" className=" relative py-28">
      <svg
        className="absolute xl:-top-16  lg:-top-14 md:-top-10 -top-6 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        transform="rotate(180)"
      >
        <path
          className=" fill-gray-50 dark:fill-darksecoundarybg"
          fillOpacity="1"
          d="M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,160C560,171,640,213,720,229.3C800,245,880,235,960,213.3C1040,192,1120,160,1200,165.3C1280,171,1360,213,1400,234.7L1440,256L1440,320L0,320Z"
        ></path>
      </svg>

      <Reveal>
        <h1 className="text-4xl font-bold text-center ">Projects</h1>
        <h3 className=" font-semibold text-sm text-center mt-2 mb-12 bg-gradient-to-r from-primary to-pragraph bg-clip-text text-transparent">
          Some of my Work
        </h3>

        <div className="grid md:grid-cols-2 lg:gap-12 gap-8 max-w-4xl lg:mx-auto mx-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-darksecoundarybg rounded-lg hover:scale-105 duration-200 overflow-hidden"
            >
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 rounded hover:scale-105 duration-200 object-cover"
                />
              </a>
              <h3 className="text-2xl font-semibold p-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 px-6">
                {project.description}
              </p>
              <div className="my-4 px-6">
                {/* <h4 className="font-semibold mb-2">Technologies Used:</h4> */}
                <ul className="list-disc list-inside">
                  {project.tech.map((techItem, techIndex) => (
                    <li
                      className=" px-4 py-2 w-fit border-primaryheader border  rounded-full text-sm inline-block mr-2 mb-2 dark:border-darksecondaryheader"
                      key={techIndex}
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default Projects;
