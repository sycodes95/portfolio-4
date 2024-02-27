import PictureFrame from "../pictureFrame";
import MyPic from "../../assets/pics/selfie.jpg"

export default function Bio () {
  return (
    <div className="w-full h-fit flex gap-4">
      <div className="flex gap-16">
        <PictureFrame src={MyPic} />

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm">NAME</span>
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
      </div>

      

    </div>
  )
}