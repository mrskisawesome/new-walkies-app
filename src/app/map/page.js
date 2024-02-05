"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DogFriendlyMap() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.yelp.com/v3/businesses/search",
          {
            params: {
              term: "dog friendly",
              location: "Norwich", // Specify the location (e.g., Norwich)
            },
            headers: {
              Authorization: `Bearer YELP_API_KEY`,
            },
          }
        );

        // Check the response data
        console.log("Yelp API response:", response.data);

        // Extract place names and coordinates
        const extractedPlaces = response.data.businesses.map((place) => ({
          name: place.name,
          latitude: place.coordinates.latitude,
          longitude: place.coordinates.longitude,
        }));

        // Set the places state
        setPlaces(extractedPlaces);
      } catch (error) {
        console.error("Error fetching data from Yelp API:", error);
      }
    };

    fetchData();
  }, []);

  // Log places for debugging
  console.log("Places:", places);

  return (
    <div>
      <h1>Dog-Friendly Map</h1>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <div>
        <h2>Places:</h2>
        <ul>
          {places.map((place) => (
            <li key={place.name}>{place.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
