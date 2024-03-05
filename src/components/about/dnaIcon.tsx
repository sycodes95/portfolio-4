import Dna from "../../assets/icons/dna.svg"

export default function DnaIcon () {
  return (
    <div className="absolute top-0 left-0 w-10 h-full bg-white rounded-tl-xl rounded-br-xl">
      <img className="w-full h-full p-1 text-black " src={Dna} alt="" />
    </div>
  )
}