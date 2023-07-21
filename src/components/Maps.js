import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = () => {
  const center = [37.7749, -122.4194];
  const zoom = 10;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ position: "relative", height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <Marker position={center} />
    </MapContainer>
  );
};

export default Map;
