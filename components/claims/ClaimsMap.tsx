"use client";

import dynamic from "next/dynamic";

interface ClaimsMapProps {
  address: string;
  searchTrigger: number;
  onAddressChange: (address: string) => void;
}

const ClaimsMapLeaflet = dynamic(
  () => import("./ClaimsMapLeaflet"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[450px] items-center justify-center bg-gray-100">
        <p className="text-sm text-gray-500">
          Cargando mapa...
        </p>
      </div>
    ),
  }
);

export default function ClaimsMap(props: ClaimsMapProps) {
  return <ClaimsMapLeaflet {...props} />;
}