import PictureFrame from "../pictureFrame";
import MyPic from "../../assets/pics/selfie.jpg"
import Silhoutte from "../../assets/pics/silhoutte.png"
import MarineHead from "../../assets/pics/marineHead.webp"

import BioRow from "./bioRow";
import ActiveQuest from "./activeQuest";
import { Separator } from "@/components/ui/separator"



export default function Bio () {

  const bioData = [
    { title: 'NAME', value: 'KEVIN KIM'},
    { title: 'ALIAS', value: 'UNTALENTED WEB DEV'},

    { title: 'ORIGIN', value: 'LOS ANGELES, CA'},
    { title: 'OCCUPATION', value: 'FULLSTACK DEVELOPER'},
  ];

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/zO7EnZkR55k?si=fXdS1aBMf0F22_so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  return (
    <div className="flex flex-col w-full gap-4 h-fit ">
      <Separator className="w-full" color="white" />

      <span className="w-full p-2 text-xs font-semibold text-center text-white border-b border-white/5">THE GUY</span>
      <div className=" grid w-full  gap-12 grid-cols-1 min-[480px]:grid-cols-2 min-[480px]:grid-rows-2 min-[1440px]:grid-cols-4 grid-rows-3 min-[1440px]:grid-rows-1">
        <PictureFrame src={MarineHead} />
        <div className="flex flex-col justify-between">

          {
          bioData.map((data) => (
            <BioRow title={data.title} value={data.value}/>
          ))
          }
         
        </div>
        
        <div className="relative flex items-center justify-center w-full h-full min-[480px]:col-span-2">
          <div className="absolute top-0 left-0 flex flex-col h-full max-w-full max-h-full min-w-full gap-2 rounded-xl">
            <div className="text-xs text-white w-fit">[ MY FEATURED VIDEO ]</div>
            <iframe className="z-40 flex w-full h-full grow "  src="https://www.youtube.com/embed/zO7EnZkR55k?si=fXdS1aBMf0F22_so" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
          </div>
          
        </div>
        
      </div>

      

    </div>
  )
}