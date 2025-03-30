import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Corrige el ícono del marcador (por defecto no se muestra)
delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

export default function Footer() {
  const position: [number, number] = [-33.4489, -70.6693] // Santiago de Chile como ejemplo

  return (
    <footer className="bg-gray-100 p-6 mt-12">
      <h3 className="text-xl font-semibold mb-4">¿Dónde estamos?</h3>

      <div className="w-full h-64 mb-4">
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-full w-full rounded">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              ¡Aquí está nuestro restaurante! 🍽️  
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="text-sm text-gray-700">
        <p>📍 Dirección: Av. Ejemplo 1234, Santiago</p>
        <p>🕒 Horario: Lunes a Sábado - 12:00 a 22:00</p>
        <p>📞 Teléfono: +56 9 1234 5678</p>
      </div>
    </footer>
  )
}
