import HomeProjectCard from "./HomeProjectCard";
import { useState } from "react";

function HomeProjects() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col font-display text-white py-4 px-36 space-y-8">
      <div className="text-4xl font-bold">Projects</div>
      <div className="grid grid-cols-3 gap-4">
        <HomeProjectCard
          image="/images/chrono.png"
          title="Chronofactorem"
          description="A website that helps you make timetables. Developed as a part of CRUx
          BPHC"
          path="https://github.com/crux-bphc/chronofactorem-rewrite"
        />
        <HomeProjectCard
          image="/images/laundry-ts.png"
          title="LaundryTS"
          description="A laundry management website for users to place laundry orders, with an administrative interface for owners to
manage orders"
          path="https://github.com/kishan1735/laundry-ts"
        />
        <HomeProjectCard
          image="/images/malware.png"
          title="Windows Malware Analysis"
          description="A Data Mining course project focused on classifying various types of windows malware"
          path="https://github.com/skoriop/windows-malware-analysis"
        />
        {visible ? (
          <HomeProjectCard
            image="/images/bits-bids.png"
            title="Bits Bids"
            description="An auctioning website that helps you buy and sell goods on campus."
            path="https://github.com/kishan1735/bits-bids"
          />
        ) : (
          <></>
        )}
      </div>

      <button
        className="border-2 border-white p-2 text-center cursor-pointer hover:bg-white hover:text-black w-28 text-lg"
        onClick={() => setVisible((e) => !e)}
      >
        See More
      </button>
    </div>
  );
}

export default HomeProjects;
