import { quests } from "../../constants/quests";
import { Reward } from "../../types/types";
import BorderFX from "./borderFX";
import QuestRow from "./questRow";



export default function Projects () {
  
  return (
    <div className="flex flex-col w-full h-full pt-12 pb-12 text-white">
      <span className="w-full p-4 text-xs text-center">- FINISHED QUESTS -</span>
      <div className="grid w-full h-full gap-8 p-8 lg:grid-cols-2">
        {    
        quests.map((quest) => (
          <QuestRow quest={quest}/>
        ))
        }
      </div>
        
    </div>
  )
}