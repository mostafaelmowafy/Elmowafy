import { useEffect, useRef, useState } from "react";
import { GrProjects, GrServices } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdInfoOutline, MdOutlineWorkspacePremium } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // دالة تقفل القائمة بعد الضغط على أي لينك
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md text-secondaryheader dark:text-darksecondaryheader p-6 flex justify-between items-center shadow z-50">
      <div className="font-oleo font-black">Mowafy</div>

      {/* Desktop Menu */}
      <nav className="md:block hidden">
        <ul className="flex lg:space-x-[50px] space-x-[25px]">
          <li>
            <a href="#Home" className="hover:text-primary duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-primary duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#Experiences" className="hover:text-primary duration-300">
              Experiences
            </a>
          </li>
          <li>
            <a href="#Services" className="hover:text-primary duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-primary duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-primary duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-3 mb-1 justify-center md:flex hidden">
        <a
          href="https://drive.google.com/uc?export=download&id=1FE0xY_HpwlaqvktghsyHPh_337LAOown"
          className="text-sm px-3 py-1 mb-2 border border-secondaryheader dark:border-gray-600 rounded hover:bg-icon dark:hover:bg-gray-700 duration-300"
          download
        >
          Resume
        </a>
      </div>
      {/* Mode Icon */}
      <div className="md:block hidden">
        <DarkModeToggle />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative" ref={menuRef}>
        {/* Icon */}
        <div
          className="flex flex-col gap-[3px] cursor-pointer group"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 bg-black dark:bg-darksecondaryheader rounded transition-all duration-300 ${
              open ? "w-5" : "w-3 group-hover:w-5"
            }`}
          ></span>
          <span
            className={`h-1 bg-black dark:bg-darksecondaryheader rounded transition-all duration-300 ${
              open ? "w-5" : "w-5"
            }`}
          ></span>
          <span
            className={`h-1 bg-black dark:bg-darksecondaryheader rounded transition-all duration-300 self-end ${
              open ? "w-5" : "w-3 group-hover:w-5"
            }`}
          ></span>
        </div>

        {/* Menu */}
        {open && (
          <div className=" dark:text-darksecondaryheader absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-40 right-0 z-20">
            <a
              href="#Home"
              onClick={handleLinkClick}
              className="w-full flex gap-2 items-center px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-700 hover:text-primary duration-300"
            >
              <IoHomeOutline /> Home
            </a>
            <a
              href="#About"
              onClick={handleLinkClick}
              className="w-full flex gap-2 items-center px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-700 hover:text-primary duration-300"
            >
              <MdInfoOutline /> About
            </a>
            <a
              href="#Experiences"
              onClick={handleLinkClick}
              className="w-full flex gap-2 items-center px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-700 hover:text-primary duration-300"
            >
              <MdOutlineWorkspacePremium /> Experiences
            </a>
            <a
              href="#Services"
              onClick={handleLinkClick}
              className="w-full flex gap-2 items-center px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-700 hover:text-primary duration-300"
            >
              <GrServices /> Services
            </a>
            <a
              href="#Projects"
              onClick={handleLinkClick}
              className="w-full flex gap-2 items-center px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-700 hover:text-primary duration-300"
            >
              <GrProjects /> Projects
            </a>
            <a
              href="#Contact"
              onClick={handleLinkClick}
              className="w-full flex gap-2 items-center px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-700 hover:text-primary duration-300"
            >
              <RiContactsLine /> Contact
            </a>
            <div className="md:hidden w-full px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-700 hover:text-primary duration-300">
              {/* Mode Icon */}
              <DarkModeToggle>Mode</DarkModeToggle>
            </div>
            <div className="mt-3 mb-1 flex justify-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1lQ-AqIpfPvkNffO8XGtmo6ise9m8fxIv"
                className="text-sm px-3 py-1 mb-2 border border-secondaryheader dark:border-gray-600 rounded hover:bg-icon dark:hover:bg-gray-700 duration-300"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
