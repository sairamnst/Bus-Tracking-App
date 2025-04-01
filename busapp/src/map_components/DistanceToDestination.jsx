import React from "react";

// Helper function to calculate the distance using the Haversine formula
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;

  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  return distance.toFixed(2); // Return distance rounded to 2 decimal places
};

const DistanceToDestination = ({ userLocation, destinationPoint }) => {
  if (!userLocation || !destinationPoint) return null; // Guard clause if coordinates are missing

  const distance = calculateDistance(
    userLocation.lat,
    userLocation.lng,
    destinationPoint.lat,
    destinationPoint.lng
  );

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg flex-1">
      <p className="font-bold text-gray-600">Distance to Destination</p>
      <p className="text-lg font-bold">
        {distance} km {/* Display the calculated distance */}
      </p>
    </div>
  );
};

export default DistanceToDestination;