import React from "react";


const Homepage = () => {
  return (
    
      <div className="h-screen w-full bg-white flex  items-center ">
        <div className=" bg-[#ece7e4] h-[550px] flex ">
          {/* section left */}
          <div className="h-[100%] w-[50%]   flex  justify-center items-center ">
            <div className="flex flex-col  justify-center   w-[60%] h-[90%]">
            <h2 className="text-[#645c55] text-2xl">kin homes</h2>
            <h1 className="text-[64px] font-bold  ">Power your home with confidence</h1>
            <h3 className="text-[18px]">Going solar has never been easier, but with so many options it's important to choose the right one. At Kin Home, we are constantly striving to provide the best customer experience imaginable.</h3>
            <button className="w-[120px] rounded-2xl h-[45px]  border-4 border-black ">get started</button>
            </div>
          </div>
          {/* right section */}

          <div className="h-full w-[50%] bg-[#ece7e4] flex justify-end items-center">
          <img
          src="/images/bg.jpeg"
          alt="image"
          className="h-[470px]"
          
        
        />
          </div>
        </div>
      </div>
    
  );
};

export default Homepage;
