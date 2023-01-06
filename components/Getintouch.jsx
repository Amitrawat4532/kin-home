import React from "react";

const Getintouch = () => {
  return (
    <div className="h-full w-full mt-20">
      <div className="h-full w-full bg-[#cec4bc] flex flex-col md:flex-row">
        <div className="w-[100%] p-12 md:pl-40 pt-28 ">
          <h1 className=" ">GET IN TOUCH</h1>
          <h2 className="text-[40px] font-[500] leading-10">
            Think we would be a good fit for your solar solution?
          </h2>
        </div>
        <div className="w-[100%] md:w-[100%] flex justify-end  md:items-center h-16 md:h-80  md:pr-28">
          <button className="w-[180px] rounded-2xl h-[45px] font-semibold border-[3.5px] border-black mr-6  hover:bg-black hover:text-white">
            Let's Get Started
          </button>
        </div>
      </div>

      {/* footer container */}
      <div className="w-full  sm:h-[50%]   flex-col flex  justify-center items-center md:items-start pb-7 md:pl-40">
        <img src="images/logo.png" alt="logo" className=" h-[150px]" />
        <h1>All rights reserved Kin Home, inc.</h1>
      </div>
    </div>
    // <div className="h-[screen] sm:h-screen w-full">
    //   {/* upContainer */}
    //   <div className="w-full bg-[#cec4bc] h-[50%] flex flex-col justify-center items-center">
    //     <h1 className="self-start md:pl-[200px]">GET IN TOUCH</h1>
    //     <div className="flex sm:gap-52">
    //       {" "}
    //       <h2 className="text-5xl">
    //         Think we would be a good fit for
    //         <br /> your solar solution?
    //       </h2>
    //       <button className="w-[220px] rounded-2xl h-[45px]  border-4 border-black ">
    //         View All Projects
    //       </button>
    //     </div>
    //   </div>
    //
    // </div>
  );
};

export default Getintouch;
