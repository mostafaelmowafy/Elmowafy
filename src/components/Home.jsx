function Home() {
  return (
    <div
      id="Home"
      className=" relative bg-profile dark:bg-darkprofile max-w-7xl mx-auto bg-no-repeat bg-center flex flex-col items-center justify-center pt-28 mb-28 bg-lightbg dark:bg-darkbg text-darkbg dark:text-lightbg"
    >
      <div className="absolute w-20 h-20 bg-primary/40 rounded-full animate-bubbleFloat bottom-10 left-1/3"></div>
      <div className="absolute w-10 h-10 bg-primary/40 rounded-full animate-bubbleFloat top-5 left-[350px]"></div>
      <div className="absolute w-24 h-24 bg-primary/40 rounded-full animate-bubbleFloat bottom-80 left-[10px]"></div>
      <div className="absolute w-16 h-16 bg-primary/40 rounded-full animate-bubbleFloat top-20 left-1/2"></div>
      <div className="absolute w-8 h-8 bg-primary/40 rounded-full animate-bubbleFloat bottom-5 right-1/3"></div>
      <div className="absolute w-16 h-16 bg-primary/40 rounded-full animate-bubbleFloat bottom-36 right-[10px]"></div>
      <div className="absolute w-24 h-24 bg-primary/40 rounded-full animate-bubbleFloat top-12 right-[10px]"></div>
      <div className="absolute w-14 h-14 bg-primary/40 rounded-full animate-bubbleFloat bottom-56 right-1/4"></div>
      <div className="absolute w-16 h-16 bg-primary/40 rounded-full animate-bubbleFloat bottom-36 right-1/2"></div>
      <div className="absolute w-14 h-14 bg-primary/40 rounded-full animate-bubbleFloat top-32 left-[240px]"></div>
      <div className=" z-10 bg-gradient-to-r from-primary to-icon rounded-full w-60 h-60 mt-14 flex items-center justify-center mb-6 overflow-hidden animate-fadeInUp ">
        <img
          src="/images/mowafy.png"
          alt="Profile"
          className=" w-50 h-72 hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h1 className=" font-poppins text-3xl text-pragraph dark:text-white font-black">
        Mostafa Elmowafy
      </h1>
      <h3 className=" font-semibold text-lg bg-gradient-to-r from-primary to-pragraph bg-clip-text text-transparent">
        Front-End Developer (Next.js | React.js)
      </h3>
      <p className=" max-w-2xl text-center text-pragraph dark:text-darksecondaryheader my-3 p-5">
        Front-End Developer skilled in building responsive and scalable web
        applications using Next.js & React.js. Experienced in advanced state
        management including Redux, React Query, and advanced design patterns
        for flexible architecture.
      </p>
    </div>
  );
}

export default Home;
