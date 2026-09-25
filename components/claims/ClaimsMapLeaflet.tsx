"use client";

import { useEffect, useMemo, useState } from "react";

import {
  CircleMarker,
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

interface ClaimsMapLeafletProps {
  address: string;
  searchTrigger: number;
  onAddressChange: (address: string) => void;
}

interface Coordinates {
  lat: number;
  lng: number;
}

const CORDOBA: Coordinates = {
  lat: -31.4201,
  lng: -64.1888,
};

function MapClickHandler({
  onLocationSelected,
}: {
  onLocationSelected: (coordinates: Coordinates) => void;
}) {
  useMapEvents({
    click(event) {
      onLocationSelected({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      });
    },
  });

  return null;
}

function MapController({
  position,
  shouldCenter,
}: {
  position: Coordinates | null;
  shouldCenter: boolean;
}) {
  const map = useMap();

  useEffect(() => {
    if (!position || !shouldCenter) return;

    map.setView(
      [position.lat, position.lng],
      17,
      {
        animate: true,
      }
    );
  }, [map, position, shouldCenter]);

  return null;
}

export default function ClaimsMapLeaflet({
  address,
  searchTrigger,
  onAddressChange,
}: ClaimsMapLeafletProps) {
  const [position, setPosition] =
    useState<Coordinates | null>(null);

  const [shouldCenter, setShouldCenter] =
    useState(false);

  const [isSearching, setIsSearching] =
    useState(false);

  const [mapMessage, setMapMessage] =
    useState("");

 
  useEffect(() => {
    if (searchTrigger === 0) return;

    const trimmedAddress = address.trim();

    if (!trimmedAddress) return;

    const searchAddress = async () => {
      setIsSearching(true);
      setMapMessage("");

      try {
        const params = new URLSearchParams({
          q: `${trimmedAddress}, Córdoba, Argentina`,
          format: "jsonv2",
          limit: "1",
          addressdetails: "1",
        });

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?${params.toString()}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            "No se pudo realizar la búsqueda."
          );
        }

        const results = await response.json();

        if (!results.length) {
          setMapMessage(
            "No encontramos esa dirección. Probá con una dirección más completa."
          );

          return;
        }

        const result = results[0];

        const coordinates = {
          lat: Number(result.lat),
          lng: Number(result.lon),
        };

        setPosition(coordinates);
        setShouldCenter(true);

        
        if (result.display_name) {
          onAddressChange(result.display_name);
        }
      } catch (error) {
        console.error(
          "Error buscando la dirección:",
          error
        );

        setMapMessage(
          "No pudimos encontrar la dirección. Intentá nuevamente."
        );
      } finally {
        setIsSearching(false);
      }
    };

    searchAddress();
  }, [searchTrigger]);

  const handleLocationSelected = async (
    coordinates: Coordinates
  ) => {
    setPosition(coordinates);
    setShouldCenter(false);
    setMapMessage("");

    try {
      setIsSearching(true);

      const params = new URLSearchParams({
        lat: coordinates.lat.toString(),
        lon: coordinates.lng.toString(),
        format: "jsonv2",
        addressdetails: "1",
      });

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?${params.toString()}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "No se pudo obtener la dirección."
        );
      }

      const result = await response.json();

      if (result.display_name) {
        onAddressChange(result.display_name);
      } else {
        setMapMessage(
          "No encontramos una dirección para ese punto."
        );
      }
    } catch (error) {
      console.error(
        "Error obteniendo la dirección:",
        error
      );

      setMapMessage(
        "No pudimos obtener la dirección de ese punto."
      );
    } finally {
      setIsSearching(false);
    }
  };

  const center = useMemo<[number, number]>(
    () => [CORDOBA.lat, CORDOBA.lng],
    []
  );

  return (
    <div className="relative h-full min-h-[450px] w-full">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom
        className="h-full min-h-[450px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClickHandler
          onLocationSelected={
            handleLocationSelected
          }
        />

        <MapController
          position={position}
          shouldCenter={shouldCenter}
        />

        {position && (
          <CircleMarker
            center={[position.lat, position.lng]}
            radius={9}
            pathOptions={{
              color: "#074173",
              fillColor: "#FFD05A",
              fillOpacity: 1,
              weight: 3,
            }}
          />
        )}
      </MapContainer>

      {(isSearching || mapMessage) && (
        <div className="absolute left-1/2 top-4 z-[1000] -translate-x-1/2">
          <div className="rounded-lg bg-white px-4 py-2 text-center text-sm shadow-md">
            {isSearching ? (
              <span className="text-gray-600">
                Buscando ubicación...
              </span>
            ) : (
              <span className="text-red-600">
                {mapMessage}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-4 left-4 z-[1000] rounded-lg bg-white/95 px-3 py-2 shadow-sm">
        <p className="text-xs font-medium text-gray-600">
          Hacé clic en el mapa para marcar la ubicación
        </p>
      </div>
    </div>
  );
}