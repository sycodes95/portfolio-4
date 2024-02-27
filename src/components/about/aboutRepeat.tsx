export default function AboutRepeat () {
  return (
    <div className="absolute top-0 right-0 h-full w-6 font-semibold bg-white flex gap-4 vertical-text items-center ">
      {
        Array(50).fill("ABOUT").map((text, i) => (
          <span key={i}>{text}</span>
        ))
      }
    </div>
  )
}