import Footbar from "./Footbar";
import Navbar from "./Navbar";
// import Footbar from "./Footbar";

function Resume() {
  return (
    <div className="bg-black min-h-screen h-full font-display">
      <Navbar />
      <div className="text-4xl text-yellow-300 mx-auto mt-6 text-center font-bold">
        Resume
      </div>
      <div className="w-fit bg-blue-400 mx-auto">
        <div className="text-white bg-black mx-auto text-center border-3 border-white w-fit font-bold py-2 px-4 mt-12 hover:-translate-1">
          <a
            href="https://drive.google.com/uc?export=download&id=1LUanRRudH1oFgyWQew9Q1RVMdtX3rinA
"
            target="_blank"
            className="text-2xl"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="text-3xl text-red-400 mx-auto text-center font-bold mt-8">
        Skills
      </div>
      <div className="bg-blue-400 w-[19vw] mt-8 mx-156">
        <ul className="text-white flex flex-col space-y-2 text-xl bg-black hover:-translate-1  border-4 border-white p-4 pl-16 w-[19vw]">
          <li>&#8226; ReactJS</li>
          <li>&#8226; Typescript</li>
          <li>&#8226; NextJS</li>
          <li>&#8226; ExpressJS</li>
          <li>&#8226; Golang</li>
          <li>&#8226; Docker</li>
          <li>&#8226; Postgres</li>
          <li>&#8226; MongoDB</li>
          <li>&#8226; Redis</li>
          <li>&#8226; Python</li>
          <li>&#8226; RabbitMQ</li>
          <li>&#8226; React Query</li>
          <li>&#8226; Redux Toolkit</li>
          <li>&#8226; Github</li>
        </ul>
      </div>

      <Footbar />
    </div>
  );
}

export default Resume;
