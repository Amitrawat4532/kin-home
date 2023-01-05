import React from "react";

const Testimonal = () => {
  return (
    <div className="h-[500px] w-full flex justify-center ">
      <div className="w-[80%] flex">
        {/* container-left */}
        <div className=" w-[40%] border-2 border-black h-[400px] flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-bold">Meet our team</h1>
          <p>
            Meet some of the industries top tier talent. Since the beginning we
            have set out to not only have an unmatched customer experience but
            an unmatched employee experience as well. In doing so we've
            attracted the best of the best and are continuing to build our team
            to ensure our customers always come first.
          </p>
          <button className="w-[120px] rounded-2xl h-[45px]  border-4 border-black ">
            See Team
          </button>
        </div>
        {/* container right */}
        <div className="w-[60%] border-black border-2"></div>
      </div>
    </div>
  );
};

export default Testimonal;
