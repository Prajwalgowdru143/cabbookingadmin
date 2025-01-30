"use client"

import Map from "../components/map"
import { Car, Users, DollarSign, XCircle } from "lucide-react"
import StatsCard from "../components/stats-card"
import DriversTable from "../components/drivers-table"

const mockChartData = Array(12)
  .fill(0)
  .map((_, i) => ({
    value: Math.floor(Math.random() * 100) + 50,
  }))

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

const mockStatsData = [{ value: 200 }, { value: 400 }, { value: 300 }, { value: 500 }, { value: 200 }, { value: 600 }]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">


      <div className="flex">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>

          </div>
          <div className=" border border-gray-200 px-4 py-4 rounded-lg">
            <Map />
          </div>

          <div className="space-y-6 my-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                title="New Users"
                value="186"
                change="+46%"
                isPositive={true}
                data={mockChartData}
                color="#22c55e"
              />
              <StatsCard
                icon={<DollarSign className="h-5 w-5 text-orange-500" />}
                title="Total Earning"
                value="$28,787"
                change="+52%"
                isPositive={true}
                data={mockChartData}
                color="#f97316"
                defaultPeriod="Weekly"
              />
              <StatsCard
                icon={<XCircle className="h-5 w-5 text-red-500" />}
                title="Cancelled Trips"
                value="177"
                change="-22%"
                isPositive={false}
                data={mockChartData}
                color="#ef4444"
              />
            </div>
            <div className="rounded-xl shadow-md p-4">
              <DriversTable drivers={mockDrivers} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

