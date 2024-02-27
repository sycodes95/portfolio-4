import Dna from "../../assets/icons/dna.svg"

export default function DnaBg () {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full w-full p-4  ">
      <img className=" w-full h-full object-contain p-2 invert opacity-5 blur-[10px]" src={Dna} alt="" />
    </div>
  )
}