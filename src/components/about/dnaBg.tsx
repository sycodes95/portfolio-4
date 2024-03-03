import Dna from "../../assets/icons/dna.svg"

export default function DnaBg () {
  return (
    <div className="absolute w-full h-full p-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
      <img className=" w-full h-full object-contain p-24 invert opacity-5 blur-[8px]" src={Dna} alt="" />
    </div>
  )
}