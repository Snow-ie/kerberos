"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const center = { lat: 9.082, lng: 7.488 };

export default function MapsSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

    if (!key || !mapId) return console.warn("Missing key or mapId");
    if (!mapRef.current) return;

    // ---- put the ID in the script URL ----
    const loader = new Loader({
      apiKey: key,
      libraries: ["marker"],
      version: "weekly",
      mapIds: [mapId],
    });

    loader.load().then((google) => {
      // ---- and again in the Map options ----
      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
        mapId,
      });

      new google.maps.marker.AdvancedMarkerElement({
        map,
        position: center,
        title: "4 Pakali Close, Wuse 2, Abuja",
      }).addListener("gmp-click", () =>
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`,
          "_blank"
        )
      );
    });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: 400 }} />;
}
