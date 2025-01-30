"use client"

import { useState } from "react"
import { Search, Star, Edit2, Trash2, Eye } from "lucide-react"
import Select from "../components/select"
import Pagination from "../components/pagination"

const driversData = [
  {
    id: 1,
    name: "Jens Brincker",
    joinDate: "23/05/2016",
    vehicleType: "SUV",
    status: "On Trip",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
    rating: 4.8,
    totalTrips: 328,
  },
  {
    id: 2,
    name: "Mark Hay",
    joinDate: "24/05/2017",
    vehicleType: "SEDAN",
    status: "Available",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
    rating: 4.5,
    totalTrips: 158,
  },
  {
    id: 3,
    name: "Anthony Davie",
    joinDate: "17/05/2016",
    vehicleType: "Crossover",
    status: "Leave",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
    rating: 4.9,
    totalTrips: 439,
  },
  {
    id: 4,
    name: "David Perry",
    joinDate: "19/04/2016",
    vehicleType: "Coupe",
    status: "On Trip",
    phone: "12435678903",
    vehicleNumber: "XN 01 1235",
    rating: 4.7,
    totalTrips: 265,
  },
]

const statusOptions = [
  { label: "All", value: "All" },
  { label: "On Trip", value: "On Trip" },
  { label: "Available", value: "Available" },
  { label: "Leave", value: "Leave" },
]

const statusColors = {
  "On Trip": "bg-yellow-100 text-yellow-800",
  Available: "bg-green-100 text-green-800",
  Leave: "bg-red-100 text-red-800",
}

export default function Drivers() {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = 6 // In a real app, calculate this based on total items

  const filteredDrivers = driversData.filter((driver) => {
    const matchesFilter = filter === "All" || driver.status === filter
    const matchesSearch =
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.vehicleNumber.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Drivers</h1>
          <p className="text-gray-600">Manage and monitor your driver fleet</p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search drivers..."
                    className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Select value={filter} onChange={setFilter} options={statusOptions} className="w-full sm:w-40" />
                <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Add New Driver
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Card Layout */}
        <div className="block sm:hidden space-y-4">
          {filteredDrivers.map((driver) => (
            <div key={driver.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{driver.name}</h3>
                  <p className="text-sm text-gray-500">{driver.vehicleNumber}</p>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    statusColors[driver.status]
                  }`}
                >
                  {driver.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-2 text-sm mb-3">
                <div>
                  <span className="text-gray-500">Join Date:</span>
                  <span className="ml-1">{driver.joinDate}</span>
                </div>
                <div>
                  <span className="text-gray-500">Vehicle:</span>
                  <span className="ml-1">{driver.vehicleType}</span>
                </div>
                <div>
                  <span className="text-gray-500">Phone:</span>
                  <span className="ml-1">{driver.phone}</span>
                </div>
                <div>
                  <span className="text-gray-500">Rating:</span>
                  <span className="ml-1 flex items-center">
                    {driver.rating}
                    <Star className="h-3.5 w-3.5 text-yellow-400 ml-0.5 fill-current" />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 border-t pt-3">
                <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table Layout */}
        <div className="hidden sm:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Driver
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDrivers.map((driver) => (
                  <tr key={driver.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{driver.name}</div>
                          <div className="text-sm text-gray-500">Joined {driver.joinDate}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{driver.vehicleType}</div>
                      <div className="text-sm text-gray-500">{driver.vehicleNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[driver.status]
                        }`}
                      >
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900">{driver.rating}</span>
                        <Star className="h-4 w-4 text-yellow-400 ml-1 fill-current" />
                        <span className="text-sm text-gray-500 ml-2">({driver.totalTrips} trips)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-200">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>

        {/* Mobile Pagination */}
        <div className="mt-4 sm:hidden">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}

