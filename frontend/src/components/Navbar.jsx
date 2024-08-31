import React from 'react'

const Navbar = () => {
  return (
    <div className="flex h-[50px] w-[99vw]  bg-[#92B19F] justify-between sticky z-10 ">

      <div className="h-[50px] z-10 ">
        <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1724997744/fasal-mitra-high-resolution-logo_dccoer.png" className="h-[100%]" alt="" />
      </div>

      <div className="flex align center  gap-10 z-10">
        

        <p class="text-[19px] mt-2" >Home</p>
        
        <p class="text-[19px] mt-2">About Us</p>
        <p class="text-[19px] mt-2">Contact Us</p>
      </div>

      <div className=" flex align-center gap-8 z-10">
        <button className="border-2 w-[6vw]   mt-2 mb-2 rounded-full ">Log in</button>
        <button className='mr-10 border-2 mt-2 mb-2 align-center rounded-full bg-white w-[6vw] border-[#384c34]'>Sign Up</button>
      </div>

    </div>
  )
}

export default Navbar