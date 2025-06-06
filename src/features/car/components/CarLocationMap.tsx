"use client";

interface CarLocationMapProps {
  addressQuery?: string; 
  latitude?: number;
  longitude?: number;
  title?: string;
}

export default function CarLocationMap({
  addressQuery,
  latitude,
  longitude,
  title = "Ubicación del vehículo"
}: CarLocationMapProps) {
  
  let mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.669491774674!2d-3.703790184596996!3d40.41677537936407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a34ea17d%3A0x3df575c83765494d!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1622550000000!5m2!1ses!2ses";

  if (latitude && longitude) {
    mapSrc = `https://maps.google.com/maps?q=loc:${latitude},${longitude}&hl=es&z=15&output=embed`;
  } else if (addressQuery) {
    mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&hl=es&z=15&output=embed`;
  }

  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden border shadow-md">
      <iframe
        title={title}
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}