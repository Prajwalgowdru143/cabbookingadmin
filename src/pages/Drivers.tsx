import { useState } from 'react';

const driversData = [
  { id: 1, name: 'Jens Brincker', joinDate: '23/05/2016', vehicleType: 'SUV', status: 'On Trip', phone: '12435678903', vehicleNumber: 'XN 01 1235' },
  { id: 2, name: 'Mark Hay', joinDate: '24/05/2017', vehicleType: 'SEDAN', status: 'Available', phone: '12435678903', vehicleNumber: 'XN 01 1235' },
  { id: 3, name: 'Anthony Davie', joinDate: '17/05/2016', vehicleType: 'Crossover', status: 'Leave', phone: '12435678903', vehicleNumber: 'XN 01 1235' },
  { id: 4, name: 'David Perry', joinDate: '19/04/2016', vehicleType: 'Coupe', status: 'On Trip', phone: '12435678903', vehicleNumber: 'XN 01 1235' },
];

export default function Drivers() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Driver's Details</h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option>All</option>
            <option>On Trip</option>
            <option>Available</option>
            <option>Leave</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3 text-center">No.</th>
              <th className="pb-3 text-center">Name</th>
              <th className="pb-3 text-center">Join Date</th>
              <th className="pb-3 text-center">Vehicle Type</th>
              <th className="pb-3 text-center">Status</th>
              <th className="pb-3 text-center">Phone</th>
              <th className="pb-3 text-center">Vehicle Number</th>
              <th className="pb-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {driversData
              .filter((driver) => filter === 'All' || driver.status === filter)
              .map((driver) => (
                <tr key={driver.id} className="border-b last:border-b-0">
                  <td className="py-4 text-center">{driver.id}</td>
                  <td className="py-4 text-center">{driver.name}</td>
                  <td className="py-4 text-center">{driver.joinDate}</td>
                  <td className="py-4 text-center">{driver.vehicleType}</td>
                  <td className="py-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        driver.status === 'On Trip'
                          ? 'bg-orange-100 text-orange-800'
                          : driver.status === 'Available'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {driver.status}
                    </span>
                  </td>
                  <td className="py-4 text-center">{driver.phone}</td>
                  <td className="py-4 text-center">{driver.vehicleNumber}</td>
                  <td className="py-4 text-center">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <span className="sr-only">More</span>
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-6">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                  page === 1 ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-2">...</span>
            {[55, 56, 57, 58].map((page) => (
              <button
                key={page}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
              >
                {page}
              </button>
            ))}
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}