import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function Footbar() {
  const handleScroll = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="text-white font-display px-32 py-32 flex flex-col space-y-8">
      <div className="text-3xl font-bold">Find Me On</div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <a href="https://github.com/kishan1735" target="_blank">
            <div className="border-4 border-white p-4 w-fit rounded-sm hover:scale-105">
              <FaGithub size={40} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/kishan-abijay-4b778a168/?originalSubdomain=in"
            target="_blank"
          >
            <div className="border-4 border-white p-4 w-fit rounded-sm hover:scale-105">
              <FaLinkedin size={40} />
            </div>
          </a>
          <a href="https://www.instagram.com/kishan__1735" target="_blank">
            <div className="flex">
              <div className="border-4 border-white p-4 w-fit rounded-sm hover:scale-105">
                <FaInstagram size={40} />
              </div>
            </div>
          </a>
          <a href="https://www.facebook.com/kishan.abijay/" target="_blank">
            <div className="flex">
              <div className="border-4 border-white p-4 w-fit rounded-sm hover:scale-105">
                <FaFacebook size={40} />
              </div>
            </div>
          </a>
        </div>
        <div
          className="border-2 mr-24 mt-2 flex border-white h-fit px-3 py-2 text-lg hover:text-black hover:bg-white cursor-pointer space-x-2"
          onClick={handleScroll}
        >
          <div>Back To Top</div>
          <div className="mt-1">^</div>
        </div>
      </div>
    </div>
  );
}
export default Footbar;
