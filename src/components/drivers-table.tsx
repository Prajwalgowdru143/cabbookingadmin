import { Edit2, Trash2 } from "lucide-react"

interface Driver {
  id: number
  name: string
  joinDate: string
  vehicleType: string
  status: string
  phone: string
  vehicleNumber: string
}

const statusColors = {
  "On Trip": "bg-orange-500",
  Available: "bg-green-500",
  Leave: "bg-red-500",
}

export default function DriversTable({ drivers }: { drivers: Driver[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b">
        <h2 className="text-lg sm:text-xl font-semibold">Driver's Details</h2>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden">
        <div className="divide-y">
          {drivers.map((driver) => (
            <div key={driver.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">{driver.name}</div>
                  <div className="text-sm text-gray-500">{driver.vehicleNumber}</div>
                </div>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium text-white ${
                    statusColors[driver.status]
                  }`}
                >
                  {driver.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
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
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button className="text-blue-600 hover:text-blue-700">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-100">
              <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">No.</th>
              <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">Name</th>
              <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">
                Join Date
              </th>
              <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">
                Vehicle Type
              </th>
              <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">Status</th>
              <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">
                Phone
              </th>
              <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">
                Vehicle Number
              </th>
              <th className="px-3 sm:px-6 py-3 text-xs sm:text-sm text-center font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {drivers.map((driver) => (
              <tr key={driver.id} className="hover:bg-gray-50">
                <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-center">{driver.id}</td>
                <td className="px-3 sm:px-6 py-4 text-xs sm:text-sm text-center font-medium">{driver.name}</td>
                <td className="hidden sm:table-cell px-3 sm:px-6 py-4 text-xs sm:text-sm text-center text-gray-500">
                  {driver.joinDate}
                </td>
                <td className="hidden sm:table-cell px-3 sm:px-6 py-4 text-xs sm:text-sm text-center">
                  {driver.vehicleType}
                </td>
                <td className="px-3 sm:px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 sm:px-3 py-1 text-xs font-medium text-white ${statusColors[driver.status]}`}
                  >
                    {driver.status}
                  </span>
                </td>
                <td className="hidden sm:table-cell px-3 sm:px-6 py-4 text-xs sm:text-sm text-center">
                  {driver.phone}
                </td>
                <td className="hidden sm:table-cell px-3 sm:px-6 py-4 text-xs sm:text-sm text-center">
                  {driver.vehicleNumber}
                </td>
                <td className="px-3 sm:px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View All Button (kept outside scrollable container) */}
      <div className="px-4 sm:px-6 py-4 flex justify-center">
        <button className="shadow-md rounded-full px-4 py-2 text-sm sm:text-base bg-gray-100 hover:bg-gray-200">
          View all
        </button>
      </div>
    </div>
  )
}

