import { QuestRefs } from "@/types/types";
import AccordianQuests from "./accordianQuests";
import QuizIcon from '@mui/icons-material/Quiz';

interface QuestsOverviewProps {
  questRefs: QuestRefs;
}

export default function QuestsOverview ({ questRefs } : QuestsOverviewProps) {
  
  return (
    <div className="z-40 flex flex-col w-full h-full min-[480px]:col-span-2 lg:max-w-96 flex-grow relative overflow-hidden ">
      <div className="sticky flex items-center justify-between w-full h-10 p-2 pl-2 font-semibold text-white border-t border-l border-r border-white/5">
        <span className="text-xs ">QUESTS OVERVIEW</span>
        <QuizIcon className="w-5 h-5 " fontSize="inherit" />
      </div>

      
			<AccordianQuests questRefs={questRefs} type="Active" />
      <AccordianQuests questRefs={questRefs} type="Completed" />
      
    </div>
  )
}