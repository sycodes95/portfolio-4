export default function Story () {
  return (
    <div className="z-40 flex flex-col w-full h-full">
      <div className="flex flex-col justify-center w-full gap-4 text-white">
        {/* <span className="pl-4 pr-4 text-xs font-semibold text-black bg-white rounded-xl">THE STORY</span> */
      }

        <span className="w-full p-2 text-xs font-semibold text-center text-white bg-black/50">// THE STORY</span>
        <div className="flex flex-col gap-4 pb-8 pl-8 pr-8">

          <span className="text-xs text-center text-white">        
            In 2022, I decided to give coding a shot, because there was no reason for me not to. I love creating, building, and I understood tech was the future. It's almost like I couldn't avoid it and it haunted me that I still didn't know how to code. The fact that you can create anything you want with nothing but just a computer appealed to me. 
          </span>
          
          <span className="text-xs text-center text-white">
            So I got into web development specifically because of the visual aspect of it. I loved how you can get instant visual feedback from your code changes, and there's some creative elements that go into building the UI / Front-end which I really enjoy.
          </span>

          <span className="text-xs text-center text-white">
            That being said, I wanted to be capable of building a full stack application and deploying it all by myself so that's what I did.
            The UI and front-end presentation satisfies my creative need, while the process of programming a full-stack application itself keeps me glued to the computer screen.
          </span>
        </div>

      </div>
    </div>
  )
}