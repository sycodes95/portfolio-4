import { Quest } from "../types/types";
import jobtrackrImage from "../assets/projects/jobtrackr.png"
import polyglotpalImage from "../assets/projects/polyglotpal.png"
import daynestmetricsImage from "../assets/projects/daynestmetrics.png"
import zenroofingImage from "../assets/projects/zenroofing.png"



import { rewards } from "./rewards";

export type QuestTitle = (typeof quests)[number]['title'];

export const quests: Quest[] = [
  {
    title: "JOBTRACKR",
    objective: "I wanted to create a simple way to track job applications, and also view metrics and useful data visualizations in order to help the user see how effective their job hunting strategies are.",
    status: "Active",
    repoSrc: "https://github.com/sycodes95/jobtrackr-2",
    videoDemoSrc: "https://www.youtube.com/watch?v=1suhJa5K7VY",
    siteSrc: "https://jobtrackr.pro",
    rewards: [
      {
        ...rewards.drizzleorm,
        type: "NEW SKILL"
      },
      {
        ...rewards.nextjs,
        type: "LVL UP"
      },
      {
        ...rewards.typescript,
        type: "LVL UP"
      },
      {
        ...rewards.tailwindcss,
        type: "LVL UP"
      },
      {
        ...rewards.postgresql,
        type: "LVL UP"
      },
      
    ],
    imageSrc: jobtrackrImage,
    timeline: "JAN 2024 - FEB 2024"
  },
  {
    title: "POLYGLOT PAL",
    objective: "My goal was to create an application where the user can practice speaking in a specific language with an AI. Why? Well I think it can be quite difficult to practice when you're not around a lot of native speakers. Travel can be expensive, and for introverts like me it might not be ideal at times.",
    status: "Completed",
    repoSrc: "https://github.com/sycodes95/polyglot-pal",
    videoDemoSrc: "https://www.youtube.com/watch?v=7dYVyEES1fU",
    siteSrc: "https://polyglotpal.up.railway.app/",
    rewards: [
      {
        ...rewards.convex,
        type: "NEW SKILL"
      },
      {
        ...rewards.react,
        type: "LVL UP"
      },
      {
        ...rewards.typescript,
        type: "LVL UP"
      },
      {
      ...rewards.tailwindcss,
      type: "LVL UP"
      },
    ],
    imageSrc: polyglotpalImage,
    timeline: "SEP 2023 - JAN 2024"
  },
  
  {
    title: "ZEN ROOFING CORP [ FREELANCE ]",
    objective: "Design and develop a user-friendly website for a local roofing company, enhance their digital presence, customer interaction capabilities, and build trust through a professional design.",
    status: "Completed",
    repoSrc: "https://github.com/sycodes95/zen-roofing",
    videoDemoSrc: "",
    siteSrc: "https://zenroofingcorp.com/",
    rewards: [
      {
        ...rewards.nextjs,
        type: "LVL UP"
      },
      {
        ...rewards.tailwindcss,
        type: "LVL UP"
      },
      {
        ...rewards.typescript,
        type: "LVL UP"
      },
    ],
    imageSrc: zenroofingImage,
    timeline: "NOV 2023 - JAN 2024"
    
  },
  {
    title: "DAYNESTMETRICS",
    objective: "I've often dreamed of a tool that could monitor both my emotional state and productivity daily, aiming to uncover any lifestyle patterns that might influence them over time. Sure, science is great, but it's still limited, and there's still a lot we don't know yet. Correlation is not causation, but it can give you insights and data points to help you make an informed decision for yourself.",
    status: "Completed",
    repoSrc: "https://github.com/sycodes95/daynestmetrics",
    videoDemoSrc: "https://www.youtube.com/watch?v=KnOYuX3RQzY",
    siteSrc: "https://daynestmetrics.up.railway.app/",
    rewards: [
      {
        ...rewards.nextjs,
        type: "NEW SKILL"
      },
      {
        ...rewards.typescript,
        type: "LVL UP"
      },
      {
        ...rewards.tailwindcss,
        type: "LVL UP"
      },
      {
        ...rewards.postgresql,
        type: "LVL UP"
      }
      
    ],
    imageSrc: daynestmetricsImage,
    timeline: "OCT 2023 - DEC 2023"
  },
  

];