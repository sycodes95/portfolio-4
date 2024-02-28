export default function Story () {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col justify-center w-full gap-4 text-white">
        {/* <span className="pl-4 pr-4 text-sm font-semibold text-black bg-white rounded-xl">THE STORY</span> */
      }
        <span className="w-full p-2 text-sm font-semibold text-center border-b border-white/5">THE STORY</span>
        <span className="text-sm text-center text-zinc-500">
          In 2022, I decided to give coding a shot, because there was no reason for me not to. I love creating, building, and I understood tech was the future. It's almost like I couldn't avoid it and it haunted me that I still didn't know how to code. The fact that you can create anything you want with nothing but just a computer, while sitting on your ass all day appealed to me. 
        </span>
        <span className="text-sm text-center text-zinc-500">
          So I got into web development because of the visual aspect of it. I loved how you can get instant visual feedback from your code changes, and there's some artistic elements that go into building the UI / Front-end which I really enjoy.
        </span>

        <span className="text-sm text-center text-zinc-500">
          That being said, I wanted to be capable of building a full stack application and deploying it all by myself. 
        </span>
      </div>
    </div>
  )
}