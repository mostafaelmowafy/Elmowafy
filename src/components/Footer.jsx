import { FaPhoneAlt } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { SiGmail } from "react-icons/si";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

function Footer() {
  return (
    <footer className=" flex justify-between items-center max-full mx-auto p-6 text-xs text-center bg-lightbg dark:bg-darkbg text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
      &copy; {new Date().getFullYear()} Mostafa Elmowafy. All rights reserved.
      <ul className="flex justify-center items-center space-x-4 mt-2">
        <li>
          <a
            href="https://www.linkedin.com/in/mostafa-elmowafy-7b015621b/"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular className=" w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/mostafa.elmowafy.35"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaFacebook className=" w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mostafaelmowafy"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialGithubCircular className=" w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:mostafaelmowafy1@gmail.com"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className=" w-4 h-w-4" />
          </a>
        </li>
        <li>
          <a
            href="tel:+201125477496"
            className="hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt className=" w-4 h-w-4" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
