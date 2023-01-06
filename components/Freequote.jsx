import React from "react";

const Freequote = () => {
  return (
    <>
      <div className="h-[400px] w-full bg-white ">
        <div className="h-[400px] w-full flex justify-center items-center flex-col gap-10 pl-4">
          <h1 className="text-[40px] font-[500]">How much does it cost? ‍</h1>
          <h1 className="text-[24px]  text-[#645c55]">
            Most customers save money every month by going solar with Kin Home.‍
          </h1>
          <button className="border-4 border-black w-[180px] rounded-2xl h-[45px] hover:bg-black hover:text-white self-start sm:self-center">
            Get a Free Quote
          </button>
        </div>
      </div>

      <section>
        <img
          className="object-cover object-center w-full md:h-[600px]"
          src="/images/freequote.png"
          alt="freequote"
        />
      </section>
    </>
  );
};

export default Freequote;
