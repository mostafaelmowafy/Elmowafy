function About() {
  return (
    <div
      id="About"
      className=" relative text-center pb-28 pt-20 bg-gray-50 dark:bg-darksecoundarybg overflow-hidden"
    >
      <svg
        className="absolute xl:-bottom-14 lg:-bottom-8 md:-bottom-2 bottom-0 left-0 w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-lightbg dark:fill-darkbg"
          fillOpacity="1"
          d="M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,160C560,171,640,213,720,229.3C800,245,880,235,960,213.3C1040,192,1120,160,1200,165.3C1280,171,1360,213,1400,234.7L1440,256L1440,320L0,320Z"
        ></path>
      </svg>

      <h1 className=" text-2xl font-extrabold">About Me</h1>
      <h3 className=" font-semibold text-xs bg-gradient-to-r from-primary to-pragraph bg-clip-text text-transparent">
        Get to new me
      </h3>
      <div className=" text-pragraph dark:text-darksecondaryheader max-w-2xl p-6 mx-auto mt-4">
        <p className=" mb-4">
          Hi there! I'm Mostafa Elmowafy, a Front-End Developer specializing in
          Next.js & React.js. I enjoy building responsive and scalable web
          applications with modern technologies like{" "}
          <b> Next.js React.js, Tailwind CSS, and Supabase</b>.
        </p>
        <p className=" mb-4">
          During my journey, I’ve worked on projects ranging from{" "}
          <b> e-commerce platforms to interactive dashboards</b>, always
          focusing on clean code and user-friendly design.
        </p>
        <p className=" mb-4">
          I’m passionate about continuous learning and currently expanding my
          skills toward <b> Full-Stack Development</b>.
        </p>
        <p className=" mb-4">
          Beyond coding, I value collaboration, problem-solving, and making
          technology accessible to everyone.
        </p>
      </div>
      <div className="mt-3 mb-1 flex justify-center">
        <a
          href="https://drive.google.com/uc?export=download&id=1FE0xY_HpwlaqvktghsyHPh_337LAOown"
          className=" px-4 py-2 mb-2 border rounded-full border-secondaryheader dark:border-gray-600 hover:bg-icon dark:hover:bg-gray-700 duration-300"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;
