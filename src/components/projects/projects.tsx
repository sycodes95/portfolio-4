import { quests } from "../../constants/quests";
import { Rewards } from "../../types/types";
import BorderFX from "./borderFX";



export default function Projects () {

  
  return (
    <div className="flex flex-col w-full h-full pt-12 pb-12 text-white">
      <span className="w-full p-4 text-xs text-center">FINISHED QUESTS</span>
      <div className="grid w-full grid-cols-2 gap-4 p-8">

        <div className="flex flex-col items-center w-full gap-2">
          <div className={`relative flex items-center justify-between p-4 w-full h-10 border-l border-r  border-red-600`}>
            <span className="text-xs">JOBTRACKR</span>
            <span className={`text-zinc-500 text-xs`}>Active</span>

            <BorderFX questStatus={quests[0].status}/>
          </div>

          <div className="flex w-full gap-4 p-4 bg-white/5 ">
            <div className="flex items-center justify-center w-24 h-24 text-center border border-white/5">
              picture place holder
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-2">
          <div className={`relative flex items-center justify-between p-4 w-full h-10 border-l border-r  border-white/10`}>
            <span className="text-xs">JOBTRACKR</span>
            <span className={`text-zinc-500 text-xs`}>Completed</span>

            <BorderFX questStatus={quests[1].status}/>
          </div>

          <div className="flex w-full gap-4 p-4 bg-white/5 ">
            <div className="flex items-center justify-center w-24 h-24 text-center border border-white/5">
              picture place holder
            </div>
          </div>
        </div>

        
      </div>
      
    </div>
  )
}