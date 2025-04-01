import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000');  // Replace with your server URL

function ProximityMap() {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    // Function to get the bus driver's location
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });
            // Send the updated location to the server
            // socket.emit('bus-location-update', { lat: latitude, lng: longitude });
          },
          (error) => console.error('Error getting location', error),
          { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
        );
      }
    };

    updateLocation();
  }, []);

  return (
    <div>
      <h2>Driver Location</h2>
      {location.lat && location.lng ? (
        <p>Bus Location: Latitude: {location.lat}, Longitude: {location.lng}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default ProximityMap;
