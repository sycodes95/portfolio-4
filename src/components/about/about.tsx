import Dna from "../../assets/icons/dna.svg"
import Bio from "./bio"
import DnaBg from "./dnaBg"
import DnaIcon from "./dnaIcon"

export default function About () {
  return (
    <div className="relative w-full max-w-5xl border min-h-96 rounded-xl border-white/10 box-glow-white flex flex-col gap-2 p-8 md:p-16 overflow-hidden">
      <DnaIcon/>
      <Bio />
      <DnaBg />
    </div>
  )
}