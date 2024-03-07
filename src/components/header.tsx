import { useEffect, useState } from "react";
import SocialMedia from "./socialMedia";
import StackedSteps from "../assets/svgDecor/stacked-steps-haikei.svg"
import useFullOpacity from "@/hooks/useFullOpacity";

type Opacity = 'opacity-0' | 'opacity-100' 

export default function Header () {

  const { opacity } = useFullOpacity(); 

  return ( 
    <div className={`${opacity} sticky top-0 max-w-[100rem] text-white backdrop-blur-lg w-full h-fit items-center p-2 flex justify-between transition-all duration-1000 z-50 bg-black bg-opacity-50  border-r border-l border-white/[3%] md:p-8 md:pt-4 md:pb-4 `}>
      <img className="absolute top-0 z-50 object-cover w-4 h-8 -translate-x-1/2 md:w-8 md:h-16 left-1/2" src={StackedSteps} alt="" />
      
			<div className="absolute top-0  left-1/2 -translate-x-1/2 h-1 w-1 box-glow-white-big z-[60]"></div>

      <a className="flex items-end gap-4 w-fit" href="/">

        <div className="flex flex-col items-center mt-2 border-white/5 ">
          <span className="text-4xl h-7 md:text-6xl md:h-11 font-display">KEVINKIM</span>
          <span className="font-outline-white whitespace-nowrap font-display text-black/0 text-1xl md:text-2xl pl-[2px]">FULLSTACK DEVELOPER.</span>
        </div>
        

      </a>

      <SocialMedia />
      
    </div>


  )
}