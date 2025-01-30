import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useState } from "react"

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
})

export default function Map({ center = [51.505, -0.09], zoom = 13 }) {
  const [active, setActive] = useState("Active Drivers")

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-base sm:text-lg font-semibold">Taxi Live Location</h2>
        <div className="w-full sm:w-auto">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Active Drivers</option>
            <option>Active Cabs</option>
            <option>Active Bikes</option>
          </select>
        </div>
      </div>

      <div className="h-[250px] sm:h-[400px] rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false} // Disable default zoom control
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} />
        </MapContainer>
      </div>
    </div>
  )
}

