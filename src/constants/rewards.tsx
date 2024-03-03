import { Reward } from "../types/types";

import drizzleIcon from "../assets/icons/drizzleIcon.png"

export const rewards: {
  tailwindcss: Reward;
  drizzleorm: Reward;
} = {
  tailwindcss : {
    type: "LVL UP",
    rewardName: "TailwindCSS",
    icon: <img className="object-contain h-16 p-2 transition-all border hover:cursor-pointer min-w-16 border-white/5 hover:border-white/10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
    onClick={()=> window.open("https://tailwindcss.com/")} />,
  },
  drizzleorm : {
    type: "NEW SKILL",
    rewardName: "Drizzle ORM",
    icon: <img className="object-contain h-16 transition-all border hover:cursor-pointer min-w-16 border-white/5 hover:border-white/10 " src={drizzleIcon} alt="" 
    onClick={()=> window.open("https://orm.drizzle.team/")}/>
  },
}