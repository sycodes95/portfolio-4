import PictureFrame from "../pictureFrame";
import MyPic from "../../assets/pics/selfie.jpg"
import BioRow from "./bioRow";
import ActiveQuest from "./activeQuest";

export default function Bio () {

  const bioData = [
    { title: 'NAME', value: 'Kevin Kim'},
    { title: 'ALIAS', value: 'Untalented Web Dev'},

    { title: 'ORIGIN', value: 'Los Angeles, CA'},
    { title: 'OCCUPATION', value: 'Fullstack Developer'},
  ];
  return (
    <div className="w-full h-fit flex gap-4">
      <div className="grid md:grid-cols-3 gap-12 w-full">
        <PictureFrame src={MyPic} />

        <div className="grid grid-rows-3 gap-4 w-full h-full">

          {
          bioData.map((data) => (
            <BioRow title={data.title} value={data.value}/>
          ))
          }
         
        </div>
        <ActiveQuest />
      </div>

      

    </div>
  )
}