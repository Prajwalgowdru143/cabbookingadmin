"use client"

import Map from "../components/map"
import { Car, Users, DollarSign, XCircle } from "lucide-react"
import StatsCard from "../components/stats-card"
import DriversTable from "../components/drivers-table"

const mockChartData = [
  {
    name: "Jan",
    value: 1200,
  },
  {
    name: "Feb",
    value: 1500,
  },
  {
    name: "Mar",
    value: 1800,
  },
  {
    name: "Apr",
    value: 1600,
  },
  {
    name: "May",
    value: 2000,
  },
  {
    name: "Jun",
    value: 2200,
  },
]

const mockDrivers = [
  {
    id: 1,
    name: "Jens Brincker",
    joinDate: "23/05/2016",
    vehicleType: "SUV",
    status: "On Trip",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
  },
  {
    id: 2,
    name: "Mark Hay",
    joinDate: "24/05/2017",
    vehicleType: "SEDAN",
    status: "Available",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
  },
  {
    id: 3,
    name: "Anthony Davie",
    joinDate: "17/05/2016",
    vehicleType: "Crossover",
    status: "Leave",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
  },
  {
    id: 4,
    name: "David Perry",
    joinDate: "19/04/2016",
    vehicleType: "Coupe",
    status: "On Trip",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
  },
] as const

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <Map />
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              icon={<Car className="h-5 w-5 text-blue-500" />}
              title="Booked Trips"
              value="765"
              change="+12%"
              isPositive={true}
              data={mockChartData}
              color="#3b82f6"
            />
            <StatsCard
              icon={<Users className="h-5 w-5 text-green-500" />}
              title="Total Users"
              value="12,345"
              change="+5%"
              isPositive={true}
              data={mockChartData}
              color="#22c55e"
            />
            <StatsCard
              icon={<DollarSign className="h-5 w-5 text-yellow-500" />}
              title="Total Revenue"
              value="$120,000"
              change="+10%"
              isPositive={true}
              data={mockChartData}
              color="#eab308"
            />
            <StatsCard
              icon={<XCircle className="h-5 w-5 text-red-500" />}
              title="Cancelled Trips"
              value="120"
              change="-8%"
              isPositive={false}
              data={mockChartData}
              color="#f87171"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <DriversTable drivers={mockDrivers} />
          </div>
        </div>
      </div>
    </div>
  )
}

