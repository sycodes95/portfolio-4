import PictureFrame from "../pictureFrame";

import BioRow from "./bioRow";
import DnaIcon from "./dnaIcon";
import scvGif from "../../assets/pics/scv.webp"
import ytLogo from "../../assets/logo/youtubelogo.png"


export default function Bio () {

  const bioData = [
    { title: 'NAME', value: 'KEVIN KIM'},

    { title: 'ORIGIN', value: 'LOS ANGELES, CA'},
    { title: 'OCCUPATION', value: 'FULLSTACK DEVELOPER ( ~2 YOE )'},
    { title: 'FAVORITE TECH', value: 'TYPESCRIPT, NEXT.JS, REACT, TAILWINDCSS, POSTGRESQL, NODE.JS.'},

  ];

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/zO7EnZkR55k?si=fXdS1aBMf0F22_so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  return (
    <div className="z-40 flex flex-col w-full gap-4 h-fit">

      <span className="relative w-full p-2 text-xs font-semibold text-center text-white bg-black/50 border-white/5 ">
        <DnaIcon/>
        // THE BIO</span>
      <div className=" grid w-full  grid-cols-1 min-[480px]:grid-cols-2 min-[480px]:grid-rows-2 min-[1440px]:grid-cols-4 grid-rows-3 min-[1440px]:grid-rows-1">
        <PictureFrame src={ytLogo} />

        <div className="flex flex-col justify-between p-4  min-[1440px]:border-r md:p-8 border-white/5">

          {
          bioData.map((data) => (
            <BioRow title={data.title} value={data.value}/>
          ))
          }
         
        </div>
        
        <div className="relative flex items-center justify-center w-full h-full min-[480px]:col-span-2 ">
          <div className="absolute top-0 left-0 flex flex-col h-full max-w-full max-h-full min-w-full gap-2 p-4 md:p-8 rounded-xl">
            <div className="text-xs text-zinc-500 w-fit">[ MY FEATURED VIDEO ]</div>
            <iframe className="z-40 flex w-full h-full grow "  src="https://www.youtube.com/embed/pcXMViu3Vgw?si=nTxO3r8BQowxfzYY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
          </div>
          
        </div>
        
      </div>

      

    </div>
  )
}
