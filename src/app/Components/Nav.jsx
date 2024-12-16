"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Nav = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const handleViewMenu = () => {
    setViewMenu(!viewMenu);
  }
  return (
    <div className='h-[70px] w-full flex items-center justify-between px-5 relative  border-b border-gray-300 z-50'>
      <div className="w-full h-full flex items-center justify-between gap-10">
        <div className="logo font-bold md:text-lg text-md uppercase text-dark_clr">portfolio<span className='text-light_clr2'>.fm</span></div>
        <div className="items-center justify-center gap-10 hidden lg:flex text-[13px] font-bold uppercase w-fit px-5">
          <Link href={"/"} className='hover:text-light_clr2 transition-all'>Home</Link>
          <Link href={"#"} className='hover:text-light_clr2 transition-all'>About</Link>
          <Link href={"#"} className='hover:text-light_clr2 transition-all'>templates</Link>
          <Link href={"/contact"} className='hover:text-light_clr2 transition-all'>Contact</Link>
        </div>
        <Link href={"#"} className='px-3 py-[6px] md:py-3 md:px-4 bg-light_clr2 text-light_clr rounded-md md:text-[13px] text-xs font-extralight uppercase hidden lg:block'>sign up</Link>
      </div>
      <div className="w-fit cursor-pointer lg:hidden transition-all flex items-center justify-center">
        {
          viewMenu ?
            <Image src={"/svg/close.svg"} width={35} height={35} alt='menu' onClick={handleViewMenu} />
            :
            <Image src={"/svg/menu-alt-2-svgrepo-com.svg"} width={40} height={40} alt='menu' onClick={handleViewMenu} />

        }
      </div>
      <div className={`absolute  ${viewMenu ? "top-full" : "bottom-full"} left-0 w-full h-fit items-center justify-center gap-5 lg:hidden  flex flex-col text-[10px] font-bold uppercase p-5 border z-40 bg-light_clr`}>
        <Link href={"/"} className='hover:text-light_clr2 transition-all'>Home</Link>
        <Link href={"#"} className='hover:text-light_clr2 transition-all'>Designs</Link>
        <Link href={"#"} className='hover:text-light_clr2 transition-all'>Contact</Link>
        <Link href={"#"} className='px-5 py-[7px]  bg-light_clr2 text-light_clr rounded-md text-[10px] font-extralight uppercase'>sign up</Link>
      </div>
    </div>
  )
}

export default Nav