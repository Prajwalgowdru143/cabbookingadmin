import { useState } from "react"
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts"
import { ChevronDown } from "lucide-react"
import type React from "react" // Added import for React

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  value: string | number
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
    <div className="rounded-xl border bg-white p-3 sm:p-4 lg:p-6">
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="rounded-full p-1.5 sm:p-2" style={{ backgroundColor: `${color}15` }}>
            {icon}
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500">{title}</p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">{value}</p>
          </div>
        </div>
        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1 sm:gap-0">
          <span className={`text-xs sm:text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</span>
          <button className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
            {period}
            <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
      <div className="h-[80px] sm:h-[100px] lg:h-[120px] mt-3 sm:mt-4">
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

