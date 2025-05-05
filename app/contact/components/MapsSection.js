"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: 9.082, lng: 7.488 };

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const GOOGLE_MAPS_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

export default function MapsSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY || !GOOGLE_MAPS_MAP_ID) {
      console.warn(
        "Google Maps API Key or Map ID is missing! Check .env.local."
      );
      return;
    }

    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: "weekly",
      libraries: ["marker"],
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom: 15,
          mapId: GOOGLE_MAPS_MAP_ID,
        });

        const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: center,
          title: "4 Pakali Close, Wuse 2, Abuja",
        });

        marker.addEventListener("gmp-click", () => {
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`,
            "_blank"
          );
        });
      }
    });
  }, []);

  return <div ref={mapRef} style={mapContainerStyle} />;
}
