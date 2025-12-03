import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([59.9311, 30.3609], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
    }

    const markers: L.Marker[] = [];
    
    properties.forEach((property) => {
      const marker = L.marker(property.coordinates).addTo(mapRef.current!);
      
      marker.bindPopup(`
        <div style="font-size: 14px;">
          <h4 style="font-weight: 600; margin-bottom: 4px;">${property.title}</h4>
          <p style="font-size: 12px; color: #666; margin-bottom: 4px;">${property.location}</p>
          <p style="font-weight: bold; color: #8B5CF6;">${(property.price / 1000000).toFixed(1)} млн ₽</p>
          <p style="font-size: 12px;">${property.area} м² • ${property.rooms} комнаты</p>
        </div>
      `);
      
      markers.push(marker);
    });

    return () => {
      markers.forEach(marker => marker.remove());
    };
  }, [properties]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />;
};

export default PropertyMap;