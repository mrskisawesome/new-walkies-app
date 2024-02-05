import Head from "next/head";

export default function MapPage() {
  return (
    <div>
      <h2>Map Page</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1CVIKoOwAdcFJBW9E0Yh4ITkZ1J0&hl=en&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
      </div>
    </div>
  );
}
