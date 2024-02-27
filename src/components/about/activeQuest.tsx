export default function ActiveQuest () {
  return (
    <div className="h-full w-full flex flex-col border-l border-yellow-300 md:max-h-72 z-50 ">

      <span className="sticky h-fit w-full bg-yellow-300 text-sm p-1 pl-2 font-semibold">ACTIVE QUEST</span>
      <span className="sticky text-sm h-fit p-1 pl-2 bg-yellow-300/25 rounded-br-lg">ROAD TO TALENTED WEB DEV</span>

      <div className="w-full flex flex-col gap-2 overflow-y-auto">

        <div className="flex flex-col gap-2 p-2">
          <span className="text-sm text-white ">QUEST NAME</span>
          <span className="text-xl text-yellow-300 font-bold ">SOME HACKATHON MAN</span>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <span className="text-sm text-white ">GOAL</span>
          <span className="text-sm text-zinc-500 ">
            WIN THE HACKATHON AND BRAG ABOUT IT SO I CAN GET A JOB GOD DAMMIT
            WIN THE HACKATHON AND BRAG ABOUT IT SO I CAN GET A JOB GOD DAMMIT
            WIN THE HACKATHON AND BRAG ABOUT IT SO I CAN GET A JOB GOD DAMMIT
            WIN THE HACKATHON AND BRAG ABOUT IT SO I CAN GET A JOB GOD DAMMIT
            WIN THE HACKATHON AND BRAG ABOUT IT SO I CAN GET A JOB GOD DAMMIT
            WIN THE HACKATHON AND BRAG ABOUT IT SO I CAN GET A JOB GOD DAMMIT, 
          </span>
        </div>
      </div>
    </div>
  )
}