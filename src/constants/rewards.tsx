import { Reward } from "../types/types";

import drizzleIcon from "../assets/icons/drizzleIcon.png"
import convexIcon from "../assets/icons/convex.png"
import nextjsIcon from "../assets/icons/nextjs.png"


const rewardImgClasses = "object-contain h-16 transition-all border hover:cursor-pointer min-w-16 border-white/5 hover:border-white/10"
          
export const rewards: {
  tailwindcss: Reward;
  drizzleorm: Reward;
  convex: Reward;
  typescript: Reward;
  react: Reward;
  nextjs: Reward;
  postgresql: Reward;
} = {
  tailwindcss : {
    type: "",
    rewardName: "TailwindCSS",
    icon: <img className={`${rewardImgClasses} p-2`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
    onClick={()=> window.open("https://tailwindcss.com/")} />,
  },
  drizzleorm : {
    type: "",
    rewardName: "Drizzle ORM",
    icon: <img className={rewardImgClasses} src={drizzleIcon} alt="" 
    onClick={()=> window.open("https://orm.drizzle.team/")}/>
  },
  convex: {
    type: "",
    rewardName: "Convex",
    icon: <img className={rewardImgClasses} src={convexIcon} alt="" 
    onClick={()=> window.open("https://www.convex.dev/")}/>
  },
  typescript: {
    type: "",
    rewardName: "Typescript",
    icon: <img className={rewardImgClasses} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" onClick={()=> window.open("https://www.typescriptlang.org/")}/>
  },
  react: {
    type: "",
    rewardName: "React",
    icon: <img className={`${rewardImgClasses} p-2`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
    onClick={()=> window.open("https://react.dev/")}
    />
  },
  nextjs: {
    type: "",
    rewardName: "Next.Js",
    icon: <img className={`${rewardImgClasses} bg-white/5 p-2`} src={nextjsIcon} 
    onClick={()=> window.open("https://react.dev/")}
    />
  },
  postgresql: {
    type: "",
    rewardName: "PostgreSQL",
    icon: <img className={`${rewardImgClasses} p-2`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
    />
  }
}




