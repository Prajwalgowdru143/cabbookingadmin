import { Edit2, Trash2 } from "lucide-react"

interface Driver {
  id: number
  name: string
  joinDate: string
  vehicleType: string
  status: "On Trip" | "Available" | "Leave"
  phone: string
  vehicleNumber: string
}

const statusStyles = {
  "On Trip": "bg-orange-500",
  Available: "bg-green-500",
  Leave: "bg-red-400",
}

export default function DriversTable({ drivers }: { drivers: Driver[] }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">Driver's Details</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">No.</th>
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">Name</th>
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">Join Date</th>
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">Vehicle Type</th>
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">Phone</th>
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">Vehicle Number</th>
              <th className="px-6 py-4 text-sm text-center font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="">
                <td className="px-6 py-4 text-sm text-center">{driver.id}</td>
                <td className="px-6 py-4 text-sm text-center font-medium">{driver.name}</td>
                <td className="px-6 py-4 text-sm text-center text-gray-500">{driver.joinDate}</td>
                <td className="px-6 py-4 text-sm text-center">{driver.vehicleType}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs text-center font-medium text-white ${statusStyles[driver.status]}`}
                  >
                    {driver.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-center">{driver.phone}</td>
                <td className="px-6 py-4 text-sm text-center">{driver.vehicleNumber}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center gap-3">
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
      <div className="px-6 flex justify-center">
        <button className="shadow-md rounded-full px-4 py-2">View all</button>
      </div>
    </div>
  )
}

