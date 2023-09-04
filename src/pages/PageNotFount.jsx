import React from 'react'

const PageNotFount = () => {
  return (
    <div className='bg-[#FFF9F1]'>
        <div>
          <div className='flex flex-col justify-center h-[100vh] items-center '>
            <p className='text-[#4C4D4F] text-[85px] font-[400] z-40'>404</p>
            <p className='text-[34px] font-[400] z-40'>Page Not Found</p>
            <p className='text-[14px] text-[#4C4D4F80] mt-[4px] z-40'>We’re sorry, the page you requested could not be found</p>
            <button className='px-[41px] py-[15px] mt-[29px] bg-black text-white rounded-[24px] z-40'>Let’s Go Bbck To Home Page</button>
          </div>
          <img className='absolute top-[-170px]  w-[263px] h-[569.003px]' src="./images/404Page/Vector.png" alt="" />
          <img className='absolute bottom-0 right-0 w-[463px] h-[400.003px]' src="./images/404Page/Vector (1).png" alt="" />
          <img className='absolute top-[-100px] right-0 w-[463px] h-[469.003px]' src="./images/404Page/Vector (2).png" alt="" />
          <img className='absolute bottom-0 left-[-100px] w-[663px] h-[369.003px]' src="./images/404Page/Vector (3).png" alt="" />
        </div>
    </div>
  )
}

export default PageNotFount