import React from 'react'

const Happycustomer = () => {
  return (
    <>
    <div className='h-[100vh] w-full ' style={{
        backgroundImage: `url('/images/happycustomer.jpeg')`
    }}>
    </div>
    <div className='h-[300px] w-full bg-[#403e3b] flex items-center px-48'>
        <div className='w-[40%]  flex flex-col h-full justify-center gap-3'>
            <div> <h1 className='text-white'>PRIOR CLIENTS</h1>
        <h2 className='text-white text-4xl font-bold'>Happy customers.</h2></div>
       
        <p className='text-white '>Great customer service! Kin is amazing! My sales rep was very informative and explained the complete process to me. I am so glad I decided to go with this company for my solar panels. Highly recommend. Thank you Kin!</p>
        </div>
    </div>
    </>
  )
}

export default Happycustomer;