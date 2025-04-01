// import React, { useEffect, useState, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// // import io from 'socket.io-client';

// import { io } from 'socket.io-client'

// import {firestore} from "../firebase"
// import {addDoc, collection} from "@firebase/firestore"
    
// const URL = "http://localhost:5000";
// const socket = io(URL, { autoConnect: false });
// socket.connect();
// console.log(socket)

// socket.on("connect_error", (err) => {
//     console.log(`connect_error due to ${err.message}`);
// });

// async function AddDocument_AutoID() {
//   var ref = collection(db, "TheStudentsList");

//   const docRef = await addDoc(ref, {
//     NameOfStd: NameBox.value,
//     RollNo: RollBox.value,
//     Section: SecBox.value,
//     Gender: GenBox.value
//   })

//   .then(() => {
//     alert("data added successfully");
//   })
//   .catch((error) => {
//     alert("Unsuccessful operation, error: " + error);
//   });

//   console.log("document id is " + docRef.id);
// }

// async function AddDocument_CustomID() {
//   var ref = doc(db, "TheStudentsList", RollBox.value);

//   await setDoc(ref, {
//     NameOfStd: NameBox.value,
//     RollNo: RollBox.value,
//     Section: SecBox.value,
//     Gender: GenBox.value
//   })

//   .then(() => {
//     alert("data added successfully");
//   })
//   .catch((error) => {
//     alert("Unsuccessful operation, error: " + error);
//   });
// }

// async function GetADocument() {
//   var ref = doc(db, "TheStudentsList", RollBox.value);

//   const docSnap = await getDoc(ref);

//   if (docSnap.exists()) {
//     NameBox.value = docSnap.data().NameOfStd;
//     SecBox.value = docSnap.data().Section;
//     GenBox.value = docSnap.data().Gender;
//   } else {
//     alert("No such Document");
//   }
// }

// async function UpdateFieldsInADocument() {
//   var ref = doc(db, "TheStudentsList", RollBox.value);

//   await updateDoc(
//     ref, {
//       NameOfStd: NameBox.value,
//       RollNo: RollBox.value,
//       Section: SecBox.value,
//       Gender: GenBox.value
//     }
//   )

//   .then(() => {
//     alert("data added successfully");
//   })
//   .catch((error) => {
//     alert("Unsuccessful operation, error: " + error);
//   });
// }

// async function DeleteDocument() {
//   var ref = doc(db, "TheStudentsList", RollBox.value);

//   const docSnap = await getDoc(ref);

//   if (!docSnap.exists()) {
//     alert("Document does not exist");
//     return;
//   }

//   await deleteDoc(ref)
//     .then(() => {
//       alert("data deleted successfully");
//     })
//     .catch((error) => {
//       alert("Unsuccessful operation, error: " + error);
//     });
// }

// function UserMap() {
//   const mapRef = useRef(null);

//   const locationRef = useRef({
//     userLocation: { lat: 0, lng: 0 }
//   });
//   const firebaseRef = collection(firestore, "locations");

//   const [busLocation, setBusLocation] = useState({ lat: 0, lng: 0 });
//   const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ lat: latitude, lng: longitude });
//           locationRef.current.userLocation.lat=latitude;
//           locationRef.current.userLocation.lng=longitude;

//           try {
//             addDoc(firebaseRef, userLocation);
//           } catch (error) {
//             console.log(error);
//           }
//         },
//         (error) => console.error('Error getting location', error)
//       );
//     }

//     socket.on('bus-location-update', (location) => {
//       setBusLocation(location);
//     });
//   }, [userLocation,setUserLocation]);

//   return (
//     <MapContainer center={[userLocation.lat, userLocation.lng]} ref={mapRef} scrollWheelZoom={false} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
      
//       {/* {busLocation.lat !== 0 && (
//         <Marker position={[busLocation.lat, busLocation.lng]}>
//           <Popup>Bus Location</Popup>
//         </Marker>
//       )} */}

//       {/* {userLocation.lat !== 0 && (
//         <Marker position={[userLocation.lat, userLocation.lng]}>
//           <Popup>Your Location</Popup>
//         </Marker>
//       )} */}
//     </MapContainer>
//   );
// }

// export default UserMap;

//************************************************************************************************************* */

// import React, { useEffect, useState, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { io } from 'socket.io-client';
// import { firestore } from '../firebase/firebase';
// import { doc, setDoc, updateDoc } from '@firebase/firestore';

// import 'leaflet/dist/leaflet.css';
// import iconMarker from 'leaflet/dist/images/marker-icon.png'
// import iconRetina from 'leaflet/dist/images/marker-icon.png'
// import iconShadow from 'leaflet/dist/images/marker-shadow.png'
// import L from 'leaflet';

// const iconPointer = L.icon({ 
//   iconRetinaUrl:iconRetina, 
//   iconUrl: iconMarker, 
//   shadowUrl: iconShadow 
// });

// const iconDot = L.icon({
//   iconUrl: 'red-dot.png',
//   iconSize: [15, 15],
//   iconAnchor: [5, 5],
// });

// // const URL = 'http://localhost:5000';
// // const socket = io(URL, { autoConnect: false });
// // socket.connect();

// // socket.on('connect_error', (err) => {
// //   console.log(`connect_error due to ${err.message}`);
// // });

// function UserMap({selectedRoute}) {
//   const mapRef = useRef(null);

//   const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
//   const firebaseRef = doc(firestore, 'locations', '22BPS1081'); // Custom ID: 22BPS1081

//   useEffect(() => {
//     // Function to add the initial document with custom ID
//     const addInitialLocation = async () => {
//       try {
//         await setDoc(firebaseRef, {
//           lat: userLocation.lat,
//           lng: userLocation.lng,
//         });
//         console.log('Initial document added');
//       } catch (error) {
//         console.log('Error adding document: ', error);
//       }
//     };

//     // Function to update location in Firestore
//     const updateLocation = async () => {
//       try {
//         await updateDoc(firebaseRef, {
//           lat: userLocation.lat,
//           lng: userLocation.lng,
//         });
//         console.log('Location updated');
//       } catch (error) {
//         console.log('Error updating document: ', error);
//       }
//     };

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ lat: latitude, lng: longitude });
//           addInitialLocation(); // Add the document with the initial location
//           console.log(position.coords);
//         },
//         (error) => console.error('Error getting location', error)
//       );
//     }

//     const intervalId = setInterval(() => {
//       if (userLocation.lat !== 0 && userLocation.lng !== 0) {
//         updateLocation(); // Update the document with new location every second
//       }
//     }, 1000);

//     // Cleanup on component unmount
//     return () => clearInterval(intervalId);
//   }, [userLocation, firebaseRef]);

//   // This useEffect will update the map view when the userLocation changes
//   useEffect(() => {
//     if (mapRef.current && userLocation.lat !== 0 && userLocation.lng !== 0) {
//       const map = mapRef.current;
//       map.setView([userLocation.lat, userLocation.lng], map.getZoom());
//     }
//   }, [userLocation]);

//   return (
//     <MapContainer
//       center={[userLocation.lat, userLocation.lng]}
//       ref={mapRef}
//       scrollWheelZoom={true}
//       zoom={13}
//       style={{ height: '100%', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//       />

//       {userLocation.lat !== 0 && (
//         <Marker 
//           position={[userLocation.lat, userLocation.lng]}
//           icon={iconPointer}
//         >
//           <Popup>Your Location</Popup>
//         </Marker>
//       )}

//       {selectedRoute.stops.map((stop, index) => (
//         <Marker
//           position={[stop.lat, stop.lng]}
//           icon={iconDot}
//         >

//         </Marker>
//         // <li key={index}>
//         //   Stop {index + 1}: Lat: {stop.lat}, Lng: {stop.lng}
//         // </li>
//       ))}



//     </MapContainer>
//   );
// }

// export default UserMap;

import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { firestore } from '../firebase/firebase';
import { doc, setDoc, updateDoc } from '@firebase/firestore';
import L from 'leaflet';

import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const iconPointer = L.icon({ 
  iconUrl: 'blue-dot.png',
  iconSize: [15, 15],
  iconAnchor: [5, 5],
});

const iconDot = L.icon({
  iconUrl: 'red-dot.png',
  iconSize: [15, 15],
  iconAnchor: [5, 5],
});

const iconDestination = L.icon({
  iconUrl: 'green-dot.png',
  iconSize: [15, 15],
  iconAnchor: [5, 5],
});

function UserMap({ selectedRoute }) {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [routePath, setRoutePath] = useState([]);
  const firebaseRef = doc(firestore, 'locations', '22BPS1081'); // Custom ID: 22BPS1081

  useEffect(() => {
    const addInitialLocation = async () => {
      try {
        await setDoc(firebaseRef, {
          lat: userLocation.lat,
          lng: userLocation.lng,
        });
        console.log('Initial document added');
      } catch (error) {
        console.log('Error adding document: ', error);
      }
    };

    const updateLocation = async () => {
      try {
        await updateDoc(firebaseRef, {
          lat: userLocation.lat,
          lng: userLocation.lng,
        });
        console.log('Location updated');
      } catch (error) {
        console.log('Error updating document: ', error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          if (mapCenter.lat === 0 && mapCenter.lng === 0) {
            setMapCenter({ lat: latitude, lng: longitude });
          }
          addInitialLocation();
          console.log(position.coords);
        },
        (error) => console.error('Error getting location', error)
      );
    }

    const intervalId = setInterval(() => {
      if (userLocation.lat !== 0 && userLocation.lng !== 0) {
        updateLocation();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [userLocation, firebaseRef]);

  useEffect(() => {
    if (mapRef.current && userLocation.lat !== 0 && userLocation.lng !== 0) {
      const map = mapRef.current;
      map.setView([userLocation.lat, userLocation.lng], map.getZoom());
    }
  }, [userLocation]);

  useEffect(() => {
    const startingPoint = {
      lat: parseFloat(selectedRoute.startingPoint.lat),
      lng: parseFloat(selectedRoute.startingPoint.lng),
    };

    const destinationPoint = {
      lat: parseFloat(selectedRoute.destinationPoint.lat),
      lng: parseFloat(selectedRoute.destinationPoint.lng),
    };

    const stops = selectedRoute.stops.map(stop => ({
      lat: parseFloat(stop.lat),
      lng: parseFloat(stop.lng),
    }));

    // Include user location in the route path
    const updatedRoutePath = [
      userLocation,      // Start with user location
      startingPoint,     // Add the starting point
      ...stops,          // Add all stops
      destinationPoint,  // Add the destination point
    ];

    setRoutePath(updatedRoutePath);
  }, [userLocation, selectedRoute]);

  return (
    <MapContainer
      center={[mapCenter.lat, mapCenter.lng]}
      ref={mapRef}
      scrollWheelZoom={true}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {userLocation.lat !== 0 && (
        <Marker 
          position={[userLocation.lat, userLocation.lng]}
          icon={iconPointer}
        >
          <Popup>Your Location</Popup>
        </Marker>
      )}

      {selectedRoute.stops.map((stop, index) => (
        <Marker
          key={index}
          position={[parseFloat(stop.lat), parseFloat(stop.lng)]}
          icon={iconDot}
        />
      ))}

      {/* Marker for the destination point with a different icon */}
      <Marker
        position={[
          parseFloat(selectedRoute.destinationPoint.lat),
          parseFloat(selectedRoute.destinationPoint.lng)
        ]}
        icon={iconDestination}
      >
        <Popup>Destination</Popup>
      </Marker>

      {/* Plot the polyline to connect user location, stops, and destination */}
      <Polyline
        positions={routePath}
        color="blue"
        weight={4}
      />
    </MapContainer>
  );
}

export default UserMap;
