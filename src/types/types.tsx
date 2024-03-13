import { QuestTitle } from "@/constants/quests";

export interface Quest {
  title: string;
  objective: string;
  status: "Active" | "Completed" | "Paused";
  repoSrc: string;
  videoDemoSrc: string;
  siteSrc: string;
  rewards: Reward[];
  imageSrc?: string;
  timeline: string;
}

export type Reward = {
  type: "LVL UP" | "NEW SKILL" | "",
  rewardName: string;
  icon: React.ReactNode;
};

export type QuestRefs = {
  [K in QuestTitle]: React.MutableRefObject<HTMLDivElement | null>;
};