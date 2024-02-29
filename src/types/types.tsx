export interface Quest {
  title: string;
  objective: string;
  status: "Active" | "Completed" | "Paused";
  repoSrc: string;
  videoDemoSrc: string;
  siteSrc: string;
  rewards: Rewards[];
}

export type Rewards = {
  type: "LVL UP" | "NEW SKILL",
  rewardName: string;
  icon: React.ReactNode;
};