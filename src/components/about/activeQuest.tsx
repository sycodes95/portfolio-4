export default function ActiveQuest () {
  return (
    <div className="z-40 flex flex-col w-full h-full border-l border-yellow-300 min-[480px]:col-span-2 md:max-h-max max-w-96">

      <span className="sticky w-full p-1 pl-2 text-xs font-semibold bg-yellow-300 h-fit">ACTIVE QUEST</span>
      <span className="sticky p-1 pl-2 text-xs rounded-br-lg h-fit bg-yellow-300/25">ROAD TO TALENTED WEB DEV</span>

      <div className="flex flex-col w-full gap-2 overflow-y-auto">

        <div className="flex flex-col gap-2 p-2">
          <span className="text-xs font-bold text-white ">QUEST NAME</span>
          <span className="text-xl font-bold text-yellow-300 ">SOME HACKATHON MAN</span>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <span className="text-sm text-white ">GOAL</span>
          <span className="text-sm text-zinc-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est, voluptate sunt eligendi labore iste commodi, ipsa ratione laborum quam eius error iusto explicabo similique. Nam dolore aspernatur officia quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est, voluptate sunt eligendi labore iste commodi, ipsa ratione laborum quam eius error iusto explicabo similique. Nam dolore aspernatur officia quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est, voluptate sunt eligendi labore iste commodi, ipsa ratione laborum quam eius error iusto explicabo similique. Nam dolore aspernatur officia quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est, voluptate sunt eligendi labore iste commodi, ipsa ratione laborum quam eius error iusto explicabo similique. Nam dolore aspernatur officia quas.

          </span>
        </div>
      </div>
    </div>
  )
}