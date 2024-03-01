import { Reward} from "../types/types"

interface RewardProps {
  reward: Reward;
}

export default function RewardDetails ({ reward } : RewardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 pb-2 whitespace-nowrap">
      <span className={`${reward.type === "LVL UP" ? "text-emerald-400" : "text-yellow-400"} text-[9px]
      `}>+ {reward.type}</span>
      {
      reward.icon
      }
      <span className="text-[11px] text-white whitespace-nowrap overflow-hidden text-ellipsis">{reward.rewardName}</span>
    </div>
  )
}