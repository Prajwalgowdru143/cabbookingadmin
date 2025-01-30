import { useState } from 'react';
import { MapPin } from 'lucide-react';

const tripsData = [
  {
    id: 1,
    trip: {
      pickup: 'Haddigaht, 302022',
      dropoff: 'Patel Marg, 302020'
    },
    tripDate: '23/05/2016',
    vehicleType: 'SUV',
    driverName: 'Jens Brincker',
    phone: '12435678903',
    tripFare: '₹236'
  },
  {
    id: 2,
    trip: {
      pickup: 'Haddigaht, 302022',
      dropoff: 'Patel Marg, 302020'
    },
    tripDate: '23/05/2016',
    vehicleType: 'SUV',
    driverName: 'Mark Hay',
    phone: '12435678903',
    tripFare: '₹236'
  },
  {
    id: 3,
    trip: {
      pickup: 'Haddigaht, 302022',
      dropoff: 'Patel Marg, 302020'
    },
    tripDate: '23/05/2016',
    vehicleType: 'SUV',
    driverName: 'Anthony Davie',
    phone: '12435678903',
    tripFare: '₹236'
  },
  {
    id: 4,
    trip: {
      pickup: 'Haddigaht, 302022',
      dropoff: 'Patel Marg, 302020'
    },
    tripDate: '23/05/2016',
    vehicleType: 'SUV',
    driverName: 'David Perry',
    phone: '12435678903',
    tripFare: '₹236'
  }
];

export default function Trips() {
  const [month, setMonth] = useState('January');
  const [year, setYear] = useState('2024');

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Trip's Details</h2>
          <div className="flex gap-4">
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3 text-center">No.</th>
              <th className="pb-3 text-center">Trip</th>
              <th className="pb-3 text-center">Trip Date</th>
              <th className="pb-3 text-center">Vehicle Type</th>
              <th className="pb-3 text-center">Driver name</th>
              <th className="pb-3 text-center">Phone</th>
              <th className="pb-3 text-center">Trip Fare</th>
              <th className="pb-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {tripsData.map((trip) => (
              <tr key={trip.id} className="border-b last:border-b-0">
                <td className="py-4 text-center">{trip.id}</td>
                <td className="py-4 text-center">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {trip.trip.pickup}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {trip.trip.dropoff}
                    </div>
                  </div>
                </td>
                <td className="py-4 text-center">{trip.tripDate}</td>
                <td className="py-4 text-center">{trip.vehicleType}</td>
                <td className="py-4 text-center">{trip.driverName}</td>
                <td className="py-4 text-center">{trip.phone}</td>
                <td className="py-4 text-center">{trip.tripFare}</td>
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