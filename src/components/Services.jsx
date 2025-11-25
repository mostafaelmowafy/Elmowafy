import { BiCodeBlock } from "react-icons/bi";
import { CgPerformance } from "react-icons/cg";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { TbTransformFilled } from "react-icons/tb";
import Reveal from "./Reveal";

export default function Services() {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Building responsive and scalable web apps using React.js, Next.js, and Tailwind CSS.",
      icon: <BiCodeBlock />,
    },
    {
      title: "UI/UX Implementation",
      description:
        "Transforming Figma designs into functional code with focus on user experience.",
      icon: <TbTransformFilled />,
    },
    {
      title: "Performance Optimization",
      description:
        "Improving speed, SEO, and accessibility with modern web practices.",
      icon: <CgPerformance />,
    },
    {
      title: "Collaboration & Documentation",
      description: "Clear bilingual documentation and teamwork with GitHub.",
      icon: <IoDocumentAttachSharp />,
    },
  ];

  return (
    <div
      id="Services"
      className=" relative pt-28 pb-20 bg-gray-50 dark:bg-darksecoundarybg"
    >
      <svg
        className="absolute lg:-top-10 md:-top-4 -top-2 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        transform="rotate(180)"
      >
        <path
          className=" fill-lightbg dark:fill-darkbg"
          fillOpacity="1"
          d="M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,160C560,171,640,213,720,229.3C800,245,880,235,960,213.3C1040,192,1120,160,1200,165.3C1280,171,1360,213,1400,234.7L1440,256L1440,320L0,320Z"
        ></path>
      </svg>

      <Reveal>
        <h1 className="text-4xl font-bold text-center ">What I Do</h1>
        <h3 className=" font-semibold text-sm text-center mb-12 bg-gradient-to-r from-primary to-pragraph bg-clip-text text-transparent">
          My Services
        </h3>
        <div className="grid md:grid-cols-2 lg:gap-12 gap-8 max-w-4xl lg:mx-auto mx-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-darkbg rounded-lg shadow"
            >
              <div className=" flex gap-2 items-center">
                <span className="text-3xl text-icon mb-4 inline">
                  {service.icon}
                </span>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
