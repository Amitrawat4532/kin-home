import React from "react";

const Homepage = () => {
  return (
    <section className="bg-[#ece7e4] grid lg:grid-cols-2 mt-32 justify-items-center items-center">
      <div className="flex flex-col flex-wrap px-12 w-auto md:w-[35rem] lg:[30rem]">
        <p className="text-[#645c55] py-7 font-semibold">KIN HOME</p>
        <h1 className="mb-2 text-5xl md:text-6xl lg:text-7xl text-black font-bold ">
          Power your home with confidence
        </h1>
        <p className=" text-primary text-base">
          Going solar has never been easier, but with so many options it&apos;s
          important to choose the right one. At Kin Home, we are constantly
          striving to provide the best customer experience imaginable.
        </p>
        <button className="border-[3.5px] font-medium rounded-xl border-black w-fit px-4 py-2 my-12  hover:bg-black hover:text-white">
          Get Started
        </button>
      </div>
      <div className="">
        <img src="images/bg.jpeg" className="static" alt="banner" />
      </div>
    </section>
  );
};

export default Homepage;
