import React from "react";

const Ourprocess = () => {
  const Iconsdata = [
    {
      image: "/images/icon1.svg",
      heading: "Consultation",
      paragraph:
        "To start your solar journey, a Kin Home representative will sit down with you either in person or virtually. Here we will answer your questions and get the information we need to customize your system.",
    },
    {
      image: "/images/icon1.svg",
      heading: "Consultation",
      paragraph:
        "To start your solar journey, a Kin Home representative will sit down with you either in person or virtually. Here we will answer your questions and get the information we need to customize your system.",
    },
    {
      image: "/images/icon1.svg",
      heading: "Consultation",
      paragraph:
        "To start your solar journey, a Kin Home representative will sit down with you either in person or virtually. Here we will answer your questions and get the information we need to customize your system.",
    },
  ];
  return (
    <div className="h-[150vh] w-full items-end flex flex-col">
      {/* upper container */}
      <div className="w-full">
        <img
          src="/images/ourprocessimg.jpeg"
          alt="image"
          className="h-[600px] w-full"
        />
      </div>
      {/* lower container */}
      <div className=" w-full">
        <div className="h-[200px] w-full bg-[#ffffff] flex justify-center items-center flex-col gap-4">
          <h1>OUR PROCESS</h1>
          <h2 className="text-4xl font-bold">How we do what we do.</h2>
        </div>
        {/* icon section */}
        <div className="bg-[#ffffff] w-full h-[400px] flex justify-center gap-20 flex-wrap">
          {Iconsdata.map((el, id) => {
            return (
              <div
                className=" h-[400px] w-[300px] flex items-center flex-col gap-3"
                key={id}
              >
                <img src={el.image} alt="image" className="w-[120px]" />
                <h1 className="text-2xl">{el.heading}</h1>
                <p className="text-1xl text-center">{el.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourprocess;
