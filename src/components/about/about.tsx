import Dna from "../../assets/icons/dna.svg"
import SectionHeader from "../sectionHeader"
import AboutRepeat from "./aboutRepeat"
import ActiveQuest from "./activeQuest"
import Bio from "./bio"
import DnaBg from "./dnaBg"
import DnaIcon from "./dnaIcon"
import RedGlowThing from "./redGlowThing"
import Stack from "./stack"
import Story from "./story"

export default function About () {
  return (
    <div className="flex flex-col justify-between w-full h-full gap-8 pl-8 pr-8 lg:flex-row">
			<RedGlowThing />
      <div className="relative flex flex-col w-full max-w-6xl gap-8 p-8 overflow-hidden border-l bg-white/[3%] min-h-96 rounded-tl-xl border-white/5 box-glow-white md:p-16 ">
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