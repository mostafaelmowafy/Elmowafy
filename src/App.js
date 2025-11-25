import About from "./components/About";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" bg-lightbg dark:bg-darkbg min-h-screen">
      <Toaster
        toastOptions={{
          className: "bg-white text-black dark:bg-gray-800 dark:text-white",
        }}
      />
      <Header />
      <Home />
      <About />
      <Experiences />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
