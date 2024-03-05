import { statusColorMap } from "../../constants/questStatusColor";
import { Quest } from "../../types/types";
import RewardDetails from "../rewardDetails";
import BorderFX from "./borderFX";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

interface QuestProps {
  quest: Quest;
}

export default function QuestCard ( {quest} : QuestProps ) {

  return (
    <div className="flex flex-col items-center w-full">
      <div className={`relative flex items-center justify-between p-4 w-full h-10 border-l border-r ${statusColorMap[quest.status]}`}>
        <span className="text-xs font-semibold">{quest.title}</span>
        <span className={` text-xs ${statusColorMap[quest.status]}`}>{quest.status}</span>

        <BorderFX questStatus={quest.status}/>
      </div>

      <div className="justify-center w-1 h-2 border-l border-white/10"></div>

      <div className="grid w-full h-full grid-cols-3 gap-4 p-4 bg-white/5 ">
        <div className="flex items-center justify-center w-full h-full col-span-3 text-center border md:col-span-1 min-h-36 border-white/5">
          {
            quest.imageSrc ?
            <img className="object-cover w-full h-full transition-all border hover:cursor-pointer border-white/0 hover:border-white/10" src={quest.imageSrc} alt="" onClick={()=> window.open(quest.siteSrc)} />
            : 
            <span>picture place holder</span>

          }
        </div>

        <div className="flex flex-col w-full h-full col-span-3 overflow-y-auto md:col-span-2 ">
          <span className="w-full pb-2 text-xs border-b border-white/5 h-fit">[ OBJECTIVE ]</span>
          <div className="h-full pt-2 overflow-y-auto text-xs text-zinc-500">
            {
              quest.objective
            }
          </div>
        </div>

        <div className="flex flex-col w-full h-full col-span-3 overflow-y-auto md:col-span-2 ">
          <span className="w-full pb-2 text-xs border-b border-white/5 h-fit">[ REWARDS ]</span>
          <div className="flex items-center h-full grid-rows-1 gap-4 pt-2 overflow-y-auto text-xs text-zinc-500">
            {
              quest.rewards.map((reward, index) => (
                <RewardDetails key={index} reward={reward} />
              ))
            }
            
            
          </div>
        </div>



        <div className="flex flex-col w-full h-full col-span-3 md:col-span-1 ">
          
          <span className="w-full pb-2 text-xs border-b border-white/5 h-fit">[ LINKS ]</span>

          <div className="grid h-full min-[480px]:grid-cols-1  grid-rows-1 gap-1 pt-2 text-xs md:grid-cols-1 md:grid-rows-3 text-zinc-500">

            <a className="flex items-center justify-between h-full p-1 pl-2 pr-2 text-xs text-center transition-all border min-h-8 border-white/5 bg-black/50 hover:bg-black/25 " href={quest.siteSrc} target="_blank">
              <LanguageIcon className="text-zinc-800" fontSize='inherit' />
              <span>WEBSITE</span>
              <LanguageIcon className="text-zinc-800" fontSize='inherit' />

            </a>
            {
              quest.repoSrc &&
              <a className="flex items-center justify-between h-full p-1 pl-2 pr-2 text-xs text-center transition-all border min-h-8 border-white/5 bg-black/50 hover:bg-black/25" href={quest.repoSrc} target="_blank">
                <GitHubIcon className="text-zinc-800" fontSize='inherit'/>  
                <span>GITHUB REPO</span>
                <GitHubIcon className="text-zinc-800" fontSize='inherit'/>  
                
              </a>

            }
            {
              quest.videoDemoSrc &&
              <a className="flex items-center justify-between h-full p-1 pl-2 pr-2 text-xs text-center transition-all border min-h-8 border-white/5 bg-black/50 hover:bg-black/25" href={quest.videoDemoSrc} target="_blank">
                <YouTubeIcon className="text-zinc-800" fontSize='inherit'/>  
                <span>VIDEO DEMO</span>
                <YouTubeIcon className="text-zinc-800" fontSize='inherit'/>  
              </a>

            }

          </div>
        </div>
      </div>

      <div className="flex justify-end w-full h-8">
        <span className="flex items-center p-2 text-xs border-b border-r border-white/5 w-fit">
          {quest.timeline}
        </span>
      </div>
    </div>
  )
}