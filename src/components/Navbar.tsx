import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const handleClick = () => {
    scroll.scrollToBottom();
  };
  return (
    <div className="flex text-white font-display justify-between px-32 py-8">
      <Link to="/" className="text-3xl font-bold text-blue-400 cursor-pointer">
        Kishan Abijay
      </Link>
      <div className="flex items-center space-x-8 font-medium text-xl">
        {/* <Link to="/projects" className="cursor-pointer hover:text-yellow-400">
          Projects
        </Link> */}
        <Link to="/resume" className="cursor-pointer hover:text-yellow-400">
          Resume
        </Link>
        <button
          className="border-2 border-white p-2 cursor-pointer hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
