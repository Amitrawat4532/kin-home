import React from "react";

const Happycustomer = () => {
  return (
    <>
      {/* <div className='h-[100vh] w-full ' style={{
        backgroundImage: `url('/images/happycustomer.jpeg')`
    }}>
    </div>
    <div className='h-[300px] w-full bg-[#403e3b] flex items-center px-48'>
        <div className='w-[40%]  flex flex-col h-full justify-center gap-3'>
            <div> <h1 className='text-white'>PRIOR CLIENTS</h1>
        <h2 className='text-white text-4xl font-bold'>Happy customers.</h2></div>
       
        <p className='text-white '>Great customer service! Kin is amazing! My sales rep was very informative and explained the complete process to me. I am so glad I decided to go with this company for my solar panels. Highly recommend. Thank you Kin!</p>
        </div>
    </div> */}

      <section className="bg-[#403e3b]">
        <img
          className="h-[250px] md:h-[600px] object-center w-full"
          src="images/happycustomer.jpeg"
          height={500}
          alt="family img"
        />
        <div className=" flex h-[300px] sm:h-[400px] gap-4 flex-col  pl-3 sm:pl-36 w-[90%] sm:w-[40%]">
          <div className="pt-5 sm:pt-32">
            <h1 className="text-white font-semibold text-[14px]">
              PRIOR CLIENTS
            </h1>
            <h2 className="text-white text-4xl font-bold">Happy customers.</h2>
          </div>

          <p className="text-white  pb-7">
            Great customer service! Kin is amazing! My sales rep was very
            informative and explained the complete process to me. I am so glad I
            decided to go with this company for my solar panels. Highly
            recommend. Thank you Kin!
          </p>
        </div>
      </section>
    </>
  );
};

export default Happycustomer;
