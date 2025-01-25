import Typewriter from "./Typewriter";

function Name() {
  return (
    <div className="h-[60vh] flex flex-col justify-center font-display space-y-6 px-32 pt-20">
      <div className="text-7xl text-yellow-400 font-bold">Kishan Abijay</div>
      <div className="text-5xl px-12">
        <span className="text-5xl px-4 text-white">aka</span>
        <span className="text-red-500">RedGreninja</span>
      </div>
      <div className="text-white text-2xl w-[60vw] px-1 py-3 mt-1">
        <Typewriter
          text="I am a currently student at BITS Pilani. I love coding and do a lot of web development. I also love listening to music and playing basketball."
          delay={25}
        />
      </div>
    </div>
  );
}

export default Name;
