import { quests } from "../../constants/quests";
import { Reward } from "../../types/types";
import BorderFX from "./borderFX";
import QuestCard from "./questCard"

export default function Projects () {
  
  return (
    <div className="flex flex-col w-full h-full pb-12 pl-8 pr-8 text-white">
      <div className="grid w-full h-full gap-8 lg:grid-cols-2">
        {    
        quests.map((quest) => (
          <QuestCard quest={quest}/>
        ))
        }
      </div>
        
    </div>
  )
}