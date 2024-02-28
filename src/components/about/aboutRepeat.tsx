export default function AboutRepeat () {
  return (
    <div className="absolute top-0 right-0 flex items-center w-4 h-full gap-4 text-xs font-semibold bg-white vertical-text ">
      {
        Array(50).fill("ABOUT").map((text, i) => (
          <span key={i}>{text}</span>
        ))
      }
    </div>
  )
}