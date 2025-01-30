import { ChevronDown } from "lucide-react"

interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
  className?: string
}

export default function Select({ value, onChange, options, className = "" }: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none pl-3 sm:pl-4 pr-8 sm:pr-10 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  )
}

