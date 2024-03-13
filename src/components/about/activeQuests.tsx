import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { quests } from "@/constants/quests"


export default function ActiveQuests () {

  return (
    <Accordion type="single" collapsible>
      {
        quests.map((quest, index) => (
        quest.status === 'Active' &&
        <AccordionItem className="border-none" key={index} value={quest.title}>
          <AccordionTrigger className="p-4 text-yellow-500 hover:no-underline hover:bg-white/5 ">{quest.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 p-4 bg-yellow-500/5 ">
            <span className="text-sm text-zinc-400">
              {quest.objective}
            </span>

            <button className="w-full h-8 text-white bg-black border border-white/10">Go To Project </button>
          </AccordionContent>
        </AccordionItem>
        ))
      }
    </Accordion>

  )
}