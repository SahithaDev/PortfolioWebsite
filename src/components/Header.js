import Logo from "./Logo";
import { Link, Element } from "react-scroll";
// import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50">
      {/* Glow layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-orange-500 opacity-30 blur-3xl rounded-full -z-10"></div>

      {/* Header bar */}
      <div className="relative flex justify-between items-center bg-black rounded-full px-6 py-2">
        <div className="w-[70px]">
          <Logo />
        </div>
        <div>
          <ul className="flex gap-10 m-4 items-center text-white font-semibold">
            <li>
              <Link to="body" smooth={true} duration={500} offset={-100}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-100}>
                About me
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500} offset={-100}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="exp" smooth={true} duration={500} offset={-100}>
                Experience
              </Link>
            </li>
            <li>
              <button className="bg-orange-500 rounded-2xl p-2">
                <Link to="connect" smooth={true} duration={500} offset={-100}>
                  Let's Connect
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
