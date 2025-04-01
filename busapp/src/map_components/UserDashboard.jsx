import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// Utility function to calculate distance using Haversine formula
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

// const socket = io('http://localhost:5000');

function UserDashboard() {
  const [busLocation, setBusLocation] = useState({ lat: null, lng: null });
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => console.error('Error getting location', error)
      );
    }

    // Listen for bus location updates from the server
    // socket.on('bus-location-update', (location) => {
    //   setBusLocation(location);
    // });
  }, []);

  useEffect(() => {
    if (busLocation.lat && userLocation.lat) {
      const dist = haversine(userLocation.lat, userLocation.lng, busLocation.lat, busLocation.lng);
      setDistance(dist);
    }
  }, [busLocation, userLocation]);

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Bus Location: {busLocation.lat && busLocation.lng ? `${busLocation.lat}, ${busLocation.lng}` : 'Waiting for bus location...'}</p>
      <p>User Location: {userLocation.lat && userLocation.lng ? `${userLocation.lat}, ${userLocation.lng}` : 'Fetching user location...'}</p>
      <p>Distance between Bus and User: {distance ? `${distance.toFixed(2)} km` : 'Calculating...'}</p>
    </div>
  );
}

export default UserDashboard;
