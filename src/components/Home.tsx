import Navbar from "./Navbar";
import Name from "./Name";
import HomeProjects from "./HomeProjects";
import Footbar from "./Footbar";

function Home() {
  return (
    <div className="bg-black min-h-screen h-full">
      <Navbar />
      <Name />
      <div className="py-22"></div>
      <HomeProjects />
      <Footbar />
    </div>
  );
}

export default Home;
