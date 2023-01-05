import React from "react";
import Image from "next/Image";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-[100px] w-full bg-white fixed z-30">
      <div className="w-[50%]">
        <Image src="/images/logo.png" height={200} width={200} alt="logo" />
      </div>
      <div className="flex w-[30%]  gap-7 h-[50px]">
        <button className="font-medium">Project</button>
        <button className="font-medium">About</button>
        <button className="font-medium">Team</button>
        <button className="font-medium">Contact</button>
        <button className="w-[200px] bg-black text-white  rounded-2xl font-bold">
          join the family
        </button>
      </div>
    </div>
  );
};

export default Navbar;
