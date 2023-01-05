import React from "react";

const Feature = () => {
  const FeatureImg = [
    {
      img: "/images/card2.jpeg",
      header: "TEXAS",
      heading: "GUZMAN'S",
    },
    {
      img: "/images/card1.png",
      header: "TEXAS",
      heading: "Marshall's",
    },
    {
      img: "/images/card3.jpeg",
      header: "TEXAS",
      heading: "Delgato's",
    },
  ];
  return (
    <div className="h-[120vh] w-full flex items-center flex-col bg-[#f7f7f7] gap-8">
      <div className="h-[200px] w-[80%] flex flex-col  justify-end">
        <h1 className="text-4xl font-bold">Featured projects</h1>
        <h2 className="text-[#645c55] text-3xl">
          Some of the latest and greatest projects from us
          <br /> here at Kin Home.
        </h2>
      </div>
      <div className="h-[450px] w-[80%] flex   gap-5">
        {FeatureImg.map((el, id) => {
          return (
            <>
              <div className=" flex relative" key={id}>
                <img
                  src={el.img}
                  alt="card1"
                  width={380}
                  height={380}
                  className="rounded-2xl relative"
                />
                <div className="absolute top-[40px] left-[30px]">
                  <h1 className="font-semibold text-[#645c55]">{el.header}</h1>
                  <h2 className="font-bold text-2xl">{el.heading}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="h-[100px] w-[80%] flex justify-center items-center">
        <button className="w-[220px] rounded-2xl h-[45px]  border-4 border-black ">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Feature;
