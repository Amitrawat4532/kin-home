// import React from "react";

// const Navbar = () => {
//   //  const navData = [
//   //   {
//   //     name: "Projects",
//   //     navlink: "#",
//   //   },
//   //   {
//   //     name: "About",
//   //     navlink: "#",
//   //   },
//   //   {
//   //     name: "Team",
//   //     navlink: "#",
//   //   },
//   //   {
//   //     name: "Contact",
//   //     navlink: "#",
//   //   },
//   //   {
//   //     name: "Join the family",
//   //     navlink: "#",
//   //   },
//   // ];
//   return (
//     <div className="flex justify-center items-center h-[100px] w-full bg-white fixed z-30 top-0 gap-20 md:gap-0">
//       <div className="w-[50%]">
//         <img src="/images/logo.png" height={200} width={200} alt="logo" />
//       </div>
//       <div className=" hidden md:flex w-[30%]  gap-7 h-[50px]">
//         <button className="font-medium">Project</button>
//         <button className="font-medium">About</button>
//         <button className="font-medium">Team</button>
//         <button className="font-medium">Contact</button>
//         <button className="w-[220px] bg-black text-white  rounded-2xl font-bold ">
//           join the family
//         </button>
//       </div>
//       <img
//         src="images/ham.png"
//         height={20}
//         width={20}
//         className="inline-block md:hidden cursor-pointer"
//         alt="mob-menu"
//       />
//     </div>
//   );
// };

// export default Navbar;

//{
/* <div className=" h-[30vh] w-full bg-[#403e3b] items-center flex flex-col gap-5 p-4 ">
        <button className="font-medium text-white text-[18px]">Project</button>
        <button className="font-medium text-white text-[18px]">About</button>
        <button className="font-medium text-white text-[18px]">Team</button>
        <button className="font-medium text-white text-[18px]">Contact</button>
        <button className="w-[150px] p-2 bg-black text-white  rounded-2xl font-bold ">
          join the family
        </button>
      </div> */
//}

// import { useState } from "react";

// function NavLink({ to, children }) {
//   return (
//     <a href={to} className={`mx-4`}>
//       {children}
//     </a>
//   );
// }

// function MobileNav({ open, setOpen }) {
//   return (
//     <div
//       className={`absolute top-0 left-0 h-[500px] w-screen bg-white transform ${
//         open ? "-translate-x-0" : "-translate-y-full"
//       } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
//     >
//       <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
//         {" "}
//         {/*logo container*/}
//         <div className="w-[50%]">
//           <img src="/images/logo.png" height={200} width={200} alt="logo" />
//         </div>
//       </div>
//       {/* <div className="flex flex-col ml-4">
//         <a
//           className="text-xl font-medium my-4"
//           href="/about"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           About
//         </a>
//         <a
//           className="text-xl font-normal my-4"
//           href="/contact"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Contact
//         </a>
//       </div> */}
//       <div className="hidden md:flex h-[30vh] w-full bg-[#403e3b] items-center  flex-col gap-5 p-4 ">
//         <button className="font-medium text-white text-[18px]">Project</button>
//         <button className="font-medium text-white text-[18px]">About</button>
//         <button className="font-medium text-white text-[18px]">Team</button>
//         <button className="font-medium text-white text-[18px]">Contact</button>
//         <button className="w-[150px] p-2 bg-black text-white  rounded-2xl font-bold ">
//           join the family
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
//       <MobileNav open={open} setOpen={setOpen} />
//       <div className="w-3/12 flex items-center">
//         <div className="w-[50%]">
//           <img src="/images/logo.png" height={200} width={200} alt="logo" />
//         </div>
//       </div>
//       <div className="w-9/12 flex justify-end items-center">
//         <div
//           className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
//           onClick={() => {
//             setOpen(!open);
//           }}
//         >
//           {/* hamburger button */}
//           <span
//             className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
//               open ? "rotate-45 translate-y-3.5" : ""
//             }`}
//           />
//           <span
//             className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
//               open ? "h-0" : "h-full"
//             }`}
//           />
//           <span
//             className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
//               open ? "-rotate-45 -translate-y-3.5" : ""
//             }`}
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }

// import React from "react";
// import { useState, Transition, Fragment } from "react";
// import { Image } from "next/image";

// const Navbar = () => {
//   const [isShowing, setIsShowing] = useState(false);
//   return (
//     <>
//       <button
//         className="lg:hidden"
//         onClick={() => setIsShowing((isShowing) => !isShowing)}
//       >
//         <Image
//           src="images/ham.png"
//           height={20}
//           width={20}
//           className="inline-block lg:hidden cursor-pointer"
//           alt="mob-menu"
//         />
//       </button>
//       <Transition
//         appear
//         as={Fragment}
//         show={isShowing}
//         enter="transition-opacity duration-75"
//         enterFrom="opacity-0"
//         enterTo="opacity-100 "
//         leave="transition-opacity duration-150"
//         leaveFrom="opacity-100 "
//         leaveTo="opacity-0 "
//       >
//         <div className=" h-[30vh] w-full bg-[#403e3b] items-center flex flex-col gap-5 p-4 ">
//           <button className="font-medium text-white text-[18px]">
//             Project
//           </button>
//           <button className="font-medium text-white text-[18px]">About</button>
//           <button className="font-medium text-white text-[18px]">Team</button>
//           <button className="font-medium text-white text-[18px]">
//             Contact
//           </button>
//           <button className="w-[150px] p-2 bg-black text-white  rounded-2xl font-bold ">
//             join the family
//           </button>
//         </div>
//       </Transition>
//     </>
//   );
// };

// export default Navbar;
