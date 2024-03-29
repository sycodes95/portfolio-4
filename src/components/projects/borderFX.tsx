import { useEffect, useState } from "react"
import { Quest } from "../../types/types"
import { statusColorMap } from "../../constants/questStatusColor";

interface BorderFXProps { 
  questStatus: Quest['status'];
}

export default function BorderFX ( {questStatus} : BorderFXProps ) {

  const [borderColor, setBorderColor] = useState("")

  useEffect(() => {
    if(questStatus) setBorderColor(statusColorMap[questStatus])
  },[questStatus])

  useEffect(() => {
  },[borderColor])
  return (
    
    <>
      {
      borderColor &&
      <>
      <div className={`absolute top-0 left-0 w-1 h-[1px] border-t z-10 ${borderColor}`}></div>
      <div className={`absolute top-0 right-0 w-1 h-0 border-t ${borderColor}`}></div>
      <div className={`absolute bottom-0 left-0 w-1 h-0 border-b ${borderColor}`}></div>
      <div className={`absolute bottom-0 right-0 w-1 h-0 border-b ${borderColor}`}></div>

      </>
      }
      
      


    </>
  )
}