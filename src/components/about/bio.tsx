import PictureFrame from "../pictureFrame";
import MyPic from "../../assets/pics/selfie.jpg"

export default function Bio () {
  return (
    <div className="w-full h-fit flex gap-4">
      <div className="grid md:grid-cols-3 gap-12 w-full">
        <PictureFrame src={MyPic} />

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm border-b border-white/5 pb-2">NAME</span>
            <span className="text-zinc-500 text-md ">
              <em>Kevin Kim</em>
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white text-sm">ORIGIN</span>
            <span className="text-zinc-500 text-md ">
              <em>Los Angeles, CA</em>
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-white text-sm">OCCUPATION</span>
            <span className="text-zinc-500 text-md ">
              <em>Fullstack Developer</em>
            </span>
          </div>
        </div>

        <div className="h-full w-full flex flex-col border-l border-red-500">
          <span className="h-fit w-full bg-red-500 text-sm p-1 pl-2 font-semibold">ACTIVE QUEST</span>
        </div>
      </div>

      

    </div>
  )
}