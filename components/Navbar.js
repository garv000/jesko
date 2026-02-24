// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='fixed top-0 h-20 w-screen flex items-center justify-between px-28 text-white z-50'>
//         <div className='flex gap-10'>
//             <a href='#' className='font-bold text-[13px]'>About</a>
//             <a href='#' className='font-bold text-[13px]'>Our Fleet</a>
//             <a href='#' className='font-bold text-[13px]'>Advantages</a>
//             <a href='#' className='font-bold text-[13px]'>Global</a>
//         </div>
//         <div className='flex gap-10'>
//             <a href='tel:+971544325050' className='font-bold text-[13px]'>+971 54 432 5050</a>
//             <a href='mailto:info@jeskojets.com' className='font-bold text-[13px]'>info@jeskojets.com</a>
//         </div>
//     </nav>
//   )
// }

// export default Navbar

import React from "react";

const Navbar = () => {
  const linkClass =
    "relative flex flex-col item-center justify-center h-7 overflow-hidden group px-3";

  const textClass =
    "block leading-none whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)] group-hover:-translate-y-[calc(100%+8px)]";

  const hoverLayerClass =
    "absolute left-0 py-1 top-[calc(100%+4px)] w-full flex items-center justify-center rounded-md bg-white/15 backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)] group-hover:-translate-y-[calc(100%+4px)]";

  return (
    <nav id="navbar" className="fixed top-0 h-20 w-screen flex items-center justify-between px-28 text-white z-50 transition-colors duration-500">
      
      <div className="flex gap-10 text-[13px] font-bold">
        
        <a href="#about" className={linkClass}>
          <span className={textClass}>About</span>
          <span className={hoverLayerClass}>About</span>
        </a>

        <a href="#flight" className={linkClass}>
          <span className={textClass}>Our Fleet</span>
          <span className={hoverLayerClass}>Our Fleet</span>
        </a>

        <a href="#benefit" className={linkClass}>
          <span className={textClass}>Advantages</span>
          <span className={hoverLayerClass}>Advantages</span>
        </a>

        <a href="#global" className={linkClass}>
          <span className={textClass}>Global</span>
          <span className={hoverLayerClass}>Global</span>
        </a>

      </div>

      <div className="flex gap-10 text-[13px] font-bold">
        
        <a href="tel:+971544325050" className={linkClass}>
          <span className={textClass}>+971 54 432 5050</span>
          <span className={hoverLayerClass}>+971 54 432 5050</span>
        </a>

        <a href="mailto:info@jeskojets.com" className={linkClass}>
          <span className={textClass}>info@jeskojets.com</span>
          <span className={hoverLayerClass}>info@jeskojets.com</span>
        </a>

      </div>

    </nav>
  );
};

export default Navbar;