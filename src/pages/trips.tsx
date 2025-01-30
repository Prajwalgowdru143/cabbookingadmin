"use client"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import Select from "../components/select"
import Pagination from "../components/pagination"

const tripsData = [
  {
    id: 1,
    trip: {
      pickup: "Haddigaht, 302022",
      dropoff: "Patel Marg, 302020",
    },
    tripDate: "23/05/2016",
    vehicleType: "SUV",
    driverName: "Jens Brincker",
    phone: "12435678903",
    tripFare: "₹236",
    status: "Completed",
    distance: "12.5 km",
    duration: "25 mins",
  },
  {
    id: 2,
    trip: {
      pickup: "Haddigaht, 302022",
      dropoff: "Patel Marg, 302020",
    },
    tripDate: "23/05/2016",
    vehicleType: "SUV",
    driverName: "Mark Hay",
    phone: "12435678903",
    tripFare: "₹236",
    status: "In Progress",
    distance: "8.2 km",
    duration: "18 mins",
  },
  {
    id: 3,
    trip: {
      pickup: "Haddigaht, 302022",
      dropoff: "Patel Marg, 302020",
    },
    tripDate: "23/05/2016",
    vehicleType: "SUV",
    driverName: "Anthony Davie",
    phone: "12435678903",
    tripFare: "₹236",
    status: "Cancelled",
    distance: "15.0 km",
    duration: "30 mins",
  },
  {
    id: 4,
    trip: {
      pickup: "Haddigaht, 302022",
      dropoff: "Patel Marg, 302020",
    },
    tripDate: "23/05/2016",
    vehicleType: "SUV",
    driverName: "David Perry",
    phone: "12435678903",
    tripFare: "₹236",
    status: "Completed",
    distance: "5.7 km",
    duration: "12 mins",
  },
]

const monthOptions = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
]

const yearOptions = [
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
]

const statusColors = {
  Completed: "bg-green-100 text-green-800",
  "In Progress": "bg-yellow-100 text-yellow-800",
  Cancelled: "bg-red-100 text-red-800",
}

export default function Trips() {
  const [month, setMonth] = useState("January")
  const [year, setYear] = useState("2024")
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 6 // In a real app, calculate this based on total items

  const filteredTrips = tripsData.filter(
    (trip) =>
      trip.driverName.toLowerCase().includes(search.toLowerCase()) ||
      trip.trip.pickup.toLowerCase().includes(search.toLowerCase()) ||
      trip.trip.dropoff.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-lg sm:text-xl font-semibold">Trip's Details</h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search trips..."
                  className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Select value={month} onChange={setMonth} options={monthOptions} className="w-full sm:w-40" />
                <Select value={year} onChange={setYear} options={yearOptions} className="w-full sm:w-32" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="whitespace-nowrap pb-3 pl-4 pr-2 sm:pl-6 text-sm font-medium text-gray-500">No.</th>
                    <th className="whitespace-nowrap pb-3 px-2 text-sm font-medium text-gray-500">Trip Details</th>
                    <th className="whitespace-nowrap pb-3 px-2 text-sm font-medium text-gray-500 hidden sm:table-cell">
                      Date
                    </th>
                    <th className="whitespace-nowrap pb-3 px-2 text-sm font-medium text-gray-500 hidden lg:table-cell">
                      Vehicle
                    </th>
                    <th className="whitespace-nowrap pb-3 px-2 text-sm font-medium text-gray-500">Driver</th>
                    <th className="whitespace-nowrap pb-3 px-2 text-sm font-medium text-gray-500 hidden md:table-cell">
                      Duration
                    </th>
                    <th className="whitespace-nowrap pb-3 px-2 text-sm font-medium text-gray-500">Status</th>
                    <th className="whitespace-nowrap pb-3 px-2 text-sm font-medium text-gray-500">Fare</th>
                    <th className="whitespace-nowrap pb-3 pl-2 pr-4 sm:pr-6 text-sm font-medium text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTrips.map((trip) => (
                    <tr key={trip.id} className="border-b last:border-b-0">
                      <td className="whitespace-nowrap py-4 pl-4 pr-2 sm:pl-6">{trip.id}</td>
                      <td className="py-4 px-2 max-w-[280px] sm:max-w-none">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5 text-sm">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-green-500" />
                            <span className="truncate">{trip.trip.pickup}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-red-500" />
                            <span className="truncate">{trip.trip.dropoff}</span>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-2 hidden sm:table-cell">{trip.tripDate}</td>
                      <td className="whitespace-nowrap py-4 px-2 hidden lg:table-cell">{trip.vehicleType}</td>
                      <td className="whitespace-nowrap py-4 px-2">{trip.driverName}</td>
                      <td className="whitespace-nowrap py-4 px-2 hidden md:table-cell">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{trip.duration}</span>
                          <span className="text-sm text-gray-500">{trip.distance}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 px-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[trip.status]}`}
                        >
                          {trip.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-4 px-2 font-medium">{trip.tripFare}</td>
                      <td className="whitespace-nowrap py-4 pl-2 pr-4 sm:pr-6">
                        <div className="flex items-center gap-2">
                          <button className="p-1 hover:bg-gray-100 rounded-lg">
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded-lg">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}

