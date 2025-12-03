import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Property {
  id: number;
  title: string;
  price: number;
  area: number;
  rooms: number;
  location: string;
  coordinates: [number, number];
}

interface PropertyMapProps {
  properties: Property[];
}

const PropertyMap = ({ properties }: PropertyMapProps) => {
  return (
    <MapContainer
      center={[59.9311, 30.3609]}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {properties.map((property) => (
        <Marker key={property.id} position={property.coordinates}>
          <Popup>
            <div className="text-sm">
              <h4 className="font-semibold mb-1">{property.title}</h4>
              <p className="text-xs text-muted-foreground mb-1">{property.location}</p>
              <p className="font-bold text-accent">{(property.price / 1000000).toFixed(1)} млн ₽</p>
              <p className="text-xs">{property.area} м² • {property.rooms} комнаты</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PropertyMap;
