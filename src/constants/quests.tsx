import { Quest } from "../types/types";
import drizzleIcon from "../assets/icons/drizzleIcon.png"


export const quests: Quest[] = [
  {
    title: "JOBTRACKR",
    objective: "I wanted to create a simple way to track job applications, and also view metrics and useful data visualizations in order to help the user see how effective their job hunting strategies really are.",
    status: "Active",
    repoSrc: "https://github.com/sycodes95/jobtrackr-2",
    videoDemoSrc: "",
    siteSrc: "https://jobtrackr.pro",
    rewards: [
      {
        type: "NEW SKILL",
        rewardName: "Drizzle ORM",
        icon: <img className="object-contain w-16 h-16 border border-white/10 rounded-xl" src={drizzleIcon} alt="" />
      },
      {
        type: "LVL UP",
        rewardName: "TailwindCSS",
        icon: <img className="object-contain w-16 h-16 p-2 border border-white/10 rounded-xl" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

      }
    ],
    
  },

  {
    title: "JOBTRACKR",
    objective: "I wanted to create a simple way to track job applications, and also view metrics and useful data visualizations in order to help the user see how effective their job hunting strategies really are.",
    status: "Completed",
    repoSrc: "https://github.com/sycodes95/jobtrackr-2",
    videoDemoSrc: "",
    siteSrc: "https://jobtrackr.pro",
    rewards: [
      {
        type: "NEW SKILL",
        rewardName: "Drizzle ORM",
        icon: <img className="object-contain w-16 h-16 border border-white/10 rounded-xl" src={drizzleIcon} alt="" />
      },
      {
        type: "LVL UP",
        rewardName: "TailwindCSS",
        icon: <img className="object-contain w-16 h-16 p-2 border border-white/10 rounded-xl" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

      }
    ],
    
  },
  // {
  //   questName: "JOBTRACKR",
  //   goal: "I wanted to create a simple way to track job applications, and also view metrics and useful data visualizations in order to help the user see how effective their job hunting strategies really are.",
  //   rewards: [
  //     {
  //       type: "NEW SKILL",
  //       rewardName: "Drizzle ORM",
  //       icon: <img className="object-contain w-12 h-12 border-2 border-red-600 rounded-xl" src={drizzleIcon} alt="" />
  //     }
  //   ]
  // }
];