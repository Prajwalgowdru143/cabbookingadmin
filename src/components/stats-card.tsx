import { useState } from "react"
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts"
import { ChevronDown } from "lucide-react"
import type React from "react" // Added import for React

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  value: string
  change: string
  isPositive: boolean
  data: { value: number }[]
  color: string
  defaultPeriod?: string
}

export default function StatsCard({
  icon,
  title,
  value,
  change,
  isPositive,
  data,
  color,
  defaultPeriod = "Monthly",
}: StatsCardProps) {
  const [period, setPeriod] = useState(defaultPeriod)

  return (
    <div className="rounded-xl border bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full p-2" style={{ backgroundColor: `${color}15` }}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</span>
          <button className="flex items-center gap-1 text-sm text-gray-500">
            {period}
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="h-[120px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis hide domain={["auto", "auto"]} />
            <Area type="monotone" dataKey="value" stroke={color} fill={`url(#gradient-${title})`} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

