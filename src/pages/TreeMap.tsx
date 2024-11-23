import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { TreePine } from 'lucide-react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export default function TreeMap() {
  const [viewState, setViewState] = React.useState({
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 12
  });

  const trees = [
    { id: 1, lat: 40.7128, lng: -74.0060, species: 'Oak', condition: 'Good' },
    { id: 2, lat: 40.7138, lng: -74.0070, species: 'Maple', condition: 'Fair' },
    // Add more tree data as needed
  ];

  return (
    <div className="h-[calc(100vh-10rem)] rounded-lg overflow-hidden">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {trees.map(tree => (
          <Marker
            key={tree.id}
            latitude={tree.lat}
            longitude={tree.lng}
          >
            <button className="text-emerald-600 hover:text-emerald-700">
              <TreePine className="h-6 w-6" />
            </button>
          </Marker>
        ))}
      </Map>
    </div>
  );
}