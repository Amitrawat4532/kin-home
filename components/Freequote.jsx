import React from "react";

const Freequote = () => {
  return (
    <>
      <div className="h-[400px] w-full bg-white ">
        <div className="h-[400px] w-full flex justify-center items-center flex-col gap-10">
          <h1 className="text-4xl font-bold">How much does it cost? ‍</h1>
          <h1 className="text-3xl  text-[#645c55]">
            Most customers save money every month by going solar with Kin Home.‍
          </h1>
          <button className="border-4 border-black w-[180px] rounded-2xl h-[45px] hover:bg-black hover:text-white">
            Get a Free Quote
          </button>
        </div>
      </div>

      <div
        className="h-[90vh] w-full "
        style={{
          backgroundImage: `url('/images/freequote.png')`,

          backgroundSize: "100% 100%",
        }}
      ></div>
    </>
  );
};

export default Freequote;
