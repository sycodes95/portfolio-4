export default function Story () {
  return (
    <div className="z-40 flex flex-col w-full h-full">
      <div className="flex flex-col justify-center w-full gap-4 text-white">
        {/* <span className="pl-4 pr-4 text-xs font-semibold text-black bg-white rounded-xl">THE STORY</span> */
      }

        <span className="flex items-center justify-center w-full h-10 p-2 text-xl font-semibold text-center text-white bg-black/50">// STORY</span>
        <div className="flex flex-col gap-4 pb-8 pl-8 pr-8">

          <span className="text-sm text-center text-white">        
            I've always liked creating and building, but creating anything you want with nothing but a computer called to me. It haunted me that I didn't know how to code. I couldn't avoid it any longer, especially knowing that tech is the future. So in 2022, I decided to give coding a shot, because there was no reason for me not to.
          </span>
          
          <span className="text-sm text-center text-white">
            So I got into web development specifically because of the visual aspect of it. I loved how you can get instant visual feedback from your code changes, and there's some creative elements that go into building the UI / Front-end which I really enjoy.
          </span>

          <span className="text-sm text-center text-white">
            That being said, I wanted to be capable of building a full stack application and deploying it all by myself so that's what I did.
            The UI and front-end presentation satisfies my creative need, while the process of programming a full-stack application itself keeps me glued to the computer screen.
          </span>
        </div>

      </div>
    </div>
  )
}