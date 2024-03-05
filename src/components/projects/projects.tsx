import { quests } from "../../constants/quests";
import { Reward } from "../../types/types";
import SectionHeader from "../sectionHeader";
import BorderFX from "./borderFX";
import QuestCard from "./questCard"

export default function Projects () {
  
  return (
    <div className="flex flex-col w-full h-full gap-8 pb-12 text-white ">
      <SectionHeader title="FEATURED QUESTS" />

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