import Reveal from "./Reveal";

function Experiences() {
  const items = [
    {
      type: "Job",
      title: "Front-End Developer",
      company: "Armed Forces",
      duration: "March 2024 - December 2024",
      description:
        "Developed a system called InstaCheck using React.js to validate payment transactions and ensure they are processed for the first time. Monitored and maintained three integrated systems (POS, hotel reservation, and restaurant management), identified errors, and implemented fixes to enhance reliability and performance.",
    },
    {
      type: "Internship",
      title: "Front-End Development Using React.js",
      company: "ITI",
      duration: "July 2023 - September 2023",
      description:
        "Topics Covered: JavaScript, ECMAScript, HTML5, Bootstrap 5, React.js, Communication Skills. Final Project: Collaborated with a team to build a functional e-commerce using React.js.",
      link: "https://drive.google.com/file/d/1qh3-CfFKsjuBB4Dq6bckdqpXN3z7liwD/view?usp=drive_link",
    },
    {
      type: "Internship",
      title: "Front-End Web Fundamentals",
      company: "ITI",
      duration: "Febraury 2022 - March 2022",
      description:
        "Topics Covered: HTML5, CSS3, JavaScript (ES6). Built static web pages and learned responsive design techniques.",
      link: "https://drive.google.com/file/d/14LKbHWuy5yqBKDd83iIfKJUZtn6nGszE/view?usp=drive_link",
    },
  ];

  return (
    <div id="Experiences" className="pb-28 pt-20 ">
      <Reveal>
        <h1 className="text-4xl font-bold text-center ">Experiences</h1>
        <h3 className=" font-semibold text-sm text-center mt-2 mb-12 bg-gradient-to-r from-primary to-pragraph bg-clip-text text-transparent">
          Internchips & Jobs
        </h3>
        <div className="grid md:grid-cols-2 lg:gap-12 gap-8 max-w-5xl lg:max-w-4xl xl:max-w-5xl lg:mx-auto mx-6 ">
          {items.map((item, index) => (
            <div
              className={` ${
                index === 0 && " md:col-span-2"
              } flex flex-col justify-between bg-white dark:bg-darksecoundarybg rounded-lg hover:scale-105 duration-200 overflow-hidden`}
              key={index}
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold p-6 pb-0">{item.title}</h3>
              <h4 className=" p-6 pt-0 bg-gradient-to-r from-icon to-pragraph bg-clip-text text-transparent">
                {item.type}
              </h4>
              <div>
                {/* Company & Duration */}
                <div className="px-6 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">{item.company}</span> —{" "}
                  {item.duration}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 px-6 pb-6">
                  {item.description}
                </p>
              </div>
              {/* Link */}
              {item.link && (
                <div className=" px-6 pb-6 ">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export default Experiences;
