import React from "react";

const Navbar = () => {
  // const navData = [
  //   {
  //     name: "Projects",
  //     navlink: "#",
  //   },
  //   {
  //     name: "About",
  //     navlink: "#",
  //   },
  //   {
  //     name: "Team",
  //     navlink: "#",
  //   },
  //   {
  //     name: "Contact",
  //     navlink: "#",
  //   },
  //   {
  //     name: "Join the family",
  //     navlink: "#",
  //   },
  // ];
  return (
    <div className="flex justify-center items-center h-[100px] w-full bg-white fixed z-30 top-0 gap-20 md:gap-0">
      <div className="w-[50%]">
        <img src="/images/logo.png" height={200} width={200} alt="logo" />
      </div>
      <div className=" hidden md:flex w-[30%]  gap-7 h-[50px]">
        <button className="font-medium">Project</button>
        <button className="font-medium">About</button>
        <button className="font-medium">Team</button>
        <button className="font-medium">Contact</button>
        <button className="w-[220px] bg-black text-white  rounded-2xl font-bold ">
          join the family
        </button>
      </div>
      <img
        src="images/ham.png"
        height={20}
        width={20}
        className="inline-block md:hidden cursor-pointer"
        alt="mob-menu"
      />
    </div>
  );
};

export default Navbar;
