import React from "react";

const Testimonal = () => {
  const Reviewsdata = [
    {
      img: "images/review1.jpeg",
      name: "Stephen Andersen",
      profession: " Chief Marketing Officer ",
      alt: "review1",
    },
    {
      img: "images/review2.jpeg",
      name: "Blake Corbin",
      profession: "Chief Finance Officer",
      alt: "review2",
    },
    {
      img: "images/review3.jpeg",
      name: "Austin Elkes",
      profession: "Chief Executive Officer",
      alt: "review3",
    },
    {
      img: "images/review4.jpeg",
      name: "James Toolill",
      profession: "Chief Operating Officer",
      alt: "review4",
    },
  ];
  return (
    <div className=" flex flex-col md:flex-row gap-10 items-center py-[100px]">
      {/* container-left */}
      <div className="  sm:w-[40%]   sm:pl-36    flex flex-col justify-center gap-5 m-auto  p-6">
        <h1 className="text-3xl font-bold">Meet our team</h1>
        <p>
          Meet some of the industries top tier talent. Since the beginning we
          have set out to not only have an unmatched customer experience but an
          unmatched employee experience as well. In doing so we've attracted the
          best of the best and are continuing to build our team to ensure our
          customers always come first.
        </p>
        <button className="w-[120px] rounded-2xl h-[45px]  border-[3.5px] border-black font-bold  hover:bg-black hover:text-white">
          See Team
        </button>
      </div>
      {/* container right */}
      <div className=" w-full md:w-[60%] h-full flex flex-wrap items-center gap-4 md:gap-6  ">
        {Reviewsdata.map((el, id) => {
          return (
            <div
              className=" flex  flex-col md:flex-row justify-start items-center  w-full  md:w-[40%] h-[25%] gap-6 md:gap-6 "
              key={id}
            >
              <img
                src={el.img}
                alt={el.alt}
                className="rounded-[100%] border-[3px] border-[#cec4bc] w-24 h-24 object-cover"
              />
              <div className=" flex flex-col justify-center items-start  ">
                <h1 className=" font-bold">{el.name}</h1>
                <h2 className=" text-[#645c55] text-[12px]">{el.profession}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonal;
