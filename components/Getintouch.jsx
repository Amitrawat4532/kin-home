import React from "react";

const Getintouch = () => {
  return (
    <>
      <div className=" bg-[#cec4bc] flex flex-col md:flex-row items-center justify-between py-10">
        <div className=" p-12 md:pl-40  ">
          <h1 className=" ">GET IN TOUCH</h1>
          <h2 className="text-[40px] font-[500] leading-10 max-w-[40rem]">
            Think we would be a good fit for your solar solution?
          </h2>
        </div>
        <div className=" flex justify-end  md:items-center  self-end  md:pr-28">
          <button className="w-[180px] rounded-2xl h-[45px] font-semibold border-[3.5px] border-black mr-6  hover:bg-black hover:text-white">
            Let's Get Started
          </button>
        </div>
      </div>

      {/* footer container */}
    </>
  );
};

export default Getintouch;
