import SectionHeader from "../sectionHeader"
import Bio from "./bio"
import DnaBg from "./dnaBg"
import Story from "./story"

export default function About () {
  return (
    <div className="flex flex-col h-full gap-8">
      <SectionHeader title="PROFILE" />
      <div className="relative flex flex-col justify-between w-full h-full gap-8 lg:flex-row">
        <div className="relative flex flex-col w-full max-w-6xl gap-4  overflow-hidden min-h-96 rounded-tl-xl border-white/5 box-glow-white  bg-white/[3%]  ">
          
          <DnaBg />
          <Bio />
          <Story />
        </div>
    
      </div>

    </div>

  )
}