import Dna from "../../assets/icons/dna.svg"
import AboutRepeat from "./aboutRepeat"
import Bio from "./bio"
import DnaBg from "./dnaBg"
import DnaIcon from "./dnaIcon"
import Stack from "./stack"
import Story from "./story"

export default function About () {
  return (
    <div className="relative w-full max-w-5xl border min-h-96 rounded-xl border-white/5 bg-white/5 box-glow-white flex flex-col gap-8 p-8 md:p-16 overflow-hidden">
      <DnaIcon/>
      <AboutRepeat />
      <DnaBg />
      <Bio />
      <Story />
      <Stack />
    </div>
  )
}