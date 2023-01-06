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
    // <header className="flex justify-around items-center h-32 shadow-nav z-20  px-8 fixed top-0 bg-white w-full">
    //   <Link href={"#"}>
    //     <Image src="/images/logo.png" alt="logo" height={115} width={220} />
    //   </Link>
    //   <ul className="hidden md:flex gap-8 text-black hover:text-red-700 items-center font-medium">
    //     {navData.map((el, id) => {
    //       return (
    //         <li
    //           key={id}
    //           className="
    //             px-4 py-3 bg-primary-dark text-backlight rounded-2xl hover:opacity-80"
    //
    //         >
    //           <Link href={el.href}>{el.name}</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   {/* <h1>i am hamb btn </h1> */}
    // </header>
  );
};

export default Navbar;
