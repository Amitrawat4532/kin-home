import React from "react";
import Image from "next/legacy/image";

const Ourprocess = () => {
  const Iconsdata = [
    {
      image: "/images/icon1.svg",
      heading: "Consultation",
      paragraph:
        "To start your solar journey, a Kin Home representative will sit down with you either in person or virtually. Here we will answer your questions and get the information we need to customize your system.",
    },
    {
      image: "/images/icon2.svg",
      heading: "Design and Permitting",
      paragraph:
        "After we have gathered the information we need, we will start working on the process to get your solar system up and running. This includes a custom design, permitting, and net metering.",
    },
    {
      image: "/images/icon3.svg",
      heading: "Installation / Activation",
      paragraph:
        "Once the necessary steps are complete, our experts will install our panels on your home. Our team will then give you a call to ensure your system is activated and walk you through the app to monitor your system.",
    },
  ];
  return (
    <section className="text-center py-20 ">
      <img
        className="object-cover object-center w-full md:h-[600px]"
        src="images/ourprocessimg.jpeg"
        alt="family img"
      />
      <h4 className="mt-20  font-medium text-gray ">OUR PROCESS</h4>
      <h2 className="text-5xl font-semibold my-6 text-black">
        How we do what we do.
      </h2>
      <div className="flex flex-wrap lg:gap-12 items-center justify-center gap-12">
        {Iconsdata.map((el, id) => {
          return (
            <div key={id} className="lg:w-[300px]">
              <Image src={el.image} height={102} width={102} alt="pp" />
              <h4 className="text- text-black my-3 font-semibold ">
                {el.heading}
              </h4>
              <p className="text-gray text-base my-3 px-4">{el.paragraph}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ourprocess;
