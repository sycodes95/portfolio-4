import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { quests } from "@/constants/quests"
import GlowThing from "./glowThing";
import { useEffect, useState } from "react";
import { QuestRefs } from "@/types/types";

interface ActiveQuestsProps {
  type: "Active" | "Completed" | "Paused";
  questRefs: QuestRefs;
}

const accQuestData = {
  "Active": { 
    title: 'Active Quests'
  },
  "Completed": { 
    title: 'Completed Quests'
  },
  "Paused": { 
    title: 'Paused Quests'
  }
}


export default function AccordianQuests ( { type, questRefs} : ActiveQuestsProps ) {

  const [accData, setAccData] = useState({
    bgColor: "",
    textColor: "",
    borderColor: "",
    title: accQuestData[type].title
  });

  useEffect(() => {

    let bgColor = ""
    let textColor = ""
    let borderColor = ""

    switch(type) {
      case "Active" : 
        bgColor = "bg-yellow-500"
        textColor = "text-yellow-500"
        borderColor = "border-yellow-500"
        break;
      case "Completed" : 
        bgColor = "bg-zinc-500"
        textColor = "text-zinc-500"
        borderColor = "border-zinc-600"
        break;
      case "Paused" : 
        bgColor = "bg-red-600"
        textColor = "text-red-600"
        borderColor = "border-red-600"
        break;
      default : 
        bgColor = ""
        textColor = ""
        borderColor = ""
        break;
    }

    setAccData(prev => ({
      ...prev,
      bgColor,
      textColor,
      borderColor
    }))
    
  },[type])

  const scrollToProject = ( projectTitle : string) => {
    questRefs[projectTitle].current?.scrollIntoView({ behavior: "smooth", block: "start"});
    
  }
  


  // const accData.color = accQuestData[type].color;
  // const accTitle = accQuestData[type].title;
  
  return (
    <div className={`relative flex flex-col h-full overflow-y-auto border-l ${accData.borderColor}`}>
      {
        type === 'Active' &&
        <GlowThing />
      }
      <span className={`sticky p-1 pl-2 text-xs rounded-br-lg font-semibold h-fit flex items-center ${accData.bgColor}`}>{accData.title}</span>
      <Accordion type="single" collapsible>
      {
        quests.map((quest, index) => (
        quest.status === type &&
        <AccordionItem className="border-none " key={index} value={quest.title}>
          <AccordionTrigger className={`pl-4 pr-4 h-12 flex items-center ${accData.textColor} hover:no-underline hover:bg-white/5 `}>{quest.title}</AccordionTrigger>
          <AccordionContent className={`flex flex-col gap-4 p-4 ${accData.bgColor}/10 `}>
            <span className="text-sm text-zinc-400">
              {quest.objective}
            </span>

            <button className="w-full h-8 text-white transition-all bg-black border border-white/10 hover:bg-white/5"
            onClick={()=> scrollToProject(quest.title)}>Go To Quest </button>
          </AccordionContent>
        </AccordionItem>
        ))
      }
      </Accordion>
    </div>
  )
}

