import { quests } from "../../constants/quests";
import SectionHeader from "../sectionHeader";
import QuestCard from "./questCard"
import { QuestRefs } from "@/types/types";

interface ProjectsProps {
  questsRef: QuestRefs;
}

export default function Projects({questsRef} : ProjectsProps) {
  
  return (
    <div className="flex flex-col w-full h-full gap-8 pb-12 text-white ">
      <SectionHeader title="FEATURED QUESTS" />
      <div className="grid w-full h-full gap-8 lg:grid-cols-2">
        
        {
          
        quests.map((quest, index) => (
          <QuestCard key={index} quest={quest} 
          questRef={questsRef[quest.title]}
          />
        ))
        }
      </div>
        
    </div>
  )
}