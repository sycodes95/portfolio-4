import Dna from "../../assets/icons/dna.svg"
import AboutRepeat from "./aboutRepeat"
import ActiveQuest from "./activeQuest"
import Bio from "./bio"
import DnaBg from "./dnaBg"
import DnaIcon from "./dnaIcon"
import Stack from "./stack"
import Story from "./story"

export default function About () {
  return (
    <div className="flex justify-between w-full h-full gap-8 p-8">
			<div className="absolute top-0 right-0 h-0 w-0 box-glow-red-big z-[60]"></div>

      <div className="relative flex flex-col w-full max-w-6xl gap-8 p-8 overflow-hidden border min-h-96 rounded-tl-xl rounded-br-xl border-white/5 box-glow-white md:p-16">
        <DnaIcon/>
        {/* <AboutRepeat /> */}
        <DnaBg />
        <Bio />
        <Story />
        {/* <Stack /> */}
      </div>

      
      <ActiveQuest />
      

    </div>

  )
}