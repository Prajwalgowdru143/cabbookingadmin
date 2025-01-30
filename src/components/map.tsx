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

  const [active, setActive] = useState('Active Drivers');

  return (
    <div className="h-[400px] rounded-lg overflow-hidden ">
      <div className="flex justify-between items-center mb-6 pb-3 border-b-2 border-gray-200">
          <h2 className="text-lg font-semibold">Taxi Live Location</h2>
          <div className="flex gap-4">
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            >
              <option>Active Drivers</option>
              <option>Active Cabs</option>
              <option>Active Bikes</option>
            </select>
          </div>
        </div>
      <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} />
      </MapContainer>
    </div>
  )
}

