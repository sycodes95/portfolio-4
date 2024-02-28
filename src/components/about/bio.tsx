import PictureFrame from "../pictureFrame";
import MyPic from "../../assets/pics/selfie.jpg"
import Silhoutte from "../../assets/pics/silhoutte.png"
import MarineHead from "../../assets/pics/marineHead.webp"

import BioRow from "./bioRow";
import ActiveQuest from "./activeQuest";

export default function Bio () {

  const bioData = [
    { title: 'NAME', value: 'Kevin Kim'},
    { title: 'ALIAS', value: 'Untalented Web Dev'},

    { title: 'ORIGIN', value: 'Los Angeles, CA'},
    { title: 'OCCUPATION', value: 'Fullstack Developer'},
  ];

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/zO7EnZkR55k?si=fXdS1aBMf0F22_so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  return (
    <div className="flex w-full gap-4 h-fit">
      <div className="flex flex-col md:grid w-full gap-12 md:grid-cols-2 min-[1440px]:grid-cols-4 grid-rows-2 min-[1440px]:grid-rows-1">
        <PictureFrame src={MarineHead} />
        
        <div className="grid w-full h-full grid-rows-4 gap-2">

          {
          bioData.map((data) => (
            <BioRow title={data.title} value={data.value}/>
          ))
          }
         
        </div>
        
        <div className="relative flex items-center justify-center w-full h-full col-span-2">
          <div className="absolute top-0 left-0 flex flex-col h-full max-w-full max-h-full min-w-full gap-2 rounded-xl">
            <div className="pl-4 pr-4 text-xs font-semibold text-black bg-white w-fit">MY FEATURED VIDEO</div>
            <iframe className="z-40 flex w-full h-full grow rounded-xl "  src="https://www.youtube.com/embed/zO7EnZkR55k?si=fXdS1aBMf0F22_so" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
          </div>
          
        </div>
        
      </div>

      

    </div>
  )
}