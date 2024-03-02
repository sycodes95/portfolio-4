import { useEffect, useState } from "react";
import SocialMedia from "./socialMedia";
import StackedSteps from "../assets/svgDecor/stacked-steps-haikei.svg"

type Opacity = 'opacity-0' | 'opacity-100' 

export default function Header () {

  const [opacity, setOpacity] = useState<Opacity>('opacity-0')
  

  useEffect(() => {
    setOpacity('opacity-100')
  },[]);

  return ( 
    <div className={`${opacity} sticky top-0 max-w-[100rem] text-white backdrop-blur-lg w-full h-fit items-center p-4 flex justify-between transition-all duration-1000 z-50 bg-black bg-opacity-50  border-l border-b border-r border-white/5 pl-8 pr-8 `}>
      <img className="absolute top-0 z-50 object-cover w-16 h-16 -translate-x-1/2 left-1/2" src={StackedSteps} alt="" />
			<div className="absolute top-0  left-1/2 -translate-x-1/2 h-1 w-1 box-glow-white-big z-[60]"></div>

      <div className="flex items-end gap-4 w-fit">

        <div className="flex flex-col items-center mt-2 border-white/5 ">
          <span className="text-4xl h-7 md:text-6xl md:h-11 font-display">KEVINKIM</span>
          <span className="font-outline-white whitespace-nowrap font-display text-black/0 text-1xl md:text-2xl pl-[2px]">FULLSTACK DEVELOPER.</span>
        </div>

        

      </div>

      {/* <iframe className="" width="400" height="69" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1782904065%3Fsecret_token%3Ds-UGiFQwJaLPi&color=%23d20000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div > </div> */}

      {/* <div className="absolute flex items-center w-1 h-12 -translate-x-1/2 -translate-y-1/2 border-l min-h-max border-white/10 grow left-1/2 top-1/2 "></div> */}
      {/* <div className="flex items-center w-1 h-full border-l min-h-max border-white/10 grow "></div> */}

      <SocialMedia />

      
      
      {/* <div className="flex flex-col w-fit">

        <div className="flex flex-col text-right whitespace-nowrap ">
          <span className="text-sm ">Resume</span>

        </div>

      </div> */}


      
    </div>


  )
}