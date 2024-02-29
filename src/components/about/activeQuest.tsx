import { quests } from "../../constants/quests";
import RewardDetails from "../rewardDetails";

export default function ActiveQuest () {

  return (
    <div className="z-40 flex flex-col w-full h-full border-l  border-red-600 min-[480px]:col-span-2 max-w-96 flex-grow ">
      <span className="sticky w-full p-1 pl-2 text-xs font-semibold bg-red-600 h-fit">ACTIVE QUESTS</span>
      <span className="sticky p-1 pl-2 text-xs rounded-br-lg h-fit bg-red-600/25">ROAD TO TALENTED WEB DEV</span>

      <div className="flex flex-col h-full gap-4 overflow-y-auto ">
      {
        quests.map((quest, index) => (
          quest.status === "Active" &&
          <div key={index} className={`flex flex-col w-full h-full gap-2 p-2 grow bg-white/[3%]`}>
            {
            index > 0 && 
            <div className="w-full h-[1px] border-t border-white/10"></div>
            }
            <div className="flex flex-col gap-2 p-2">
              <span className="w-full pb-2 text-xs font-semibold text-white border-b border-white/5 ">QUEST TITLE</span>
              <span className="text-xl font-bold text-red-600 ">{quest.title}</span>
            </div>
    
            <div className="flex flex-col gap-2 p-2">
              <span className="pb-2 text-xs font-semibold text-white border-b border-white/5">OBJECTIVE</span>
              <span className="text-xs text-zinc-500 ">
                {quest.objective}
              </span>
            </div>

            <div className="flex flex-col h-full gap-2 p-2">
              <span className="pb-2 text-xs font-semibold text-white border-b border-white/5">Reward</span>

              <div className="flex flex-wrap items-center gap-4">
                {
                  quest.rewards.map((reward) => (
                    <RewardDetails reward={reward} />
                    
                  ))
                }
                
              </div>
              
            </div>


          </div>
        ))
      }
      </div>
    </div>
  )
}