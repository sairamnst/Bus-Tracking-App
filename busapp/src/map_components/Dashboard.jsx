// import React from "react";

// import UserMap from "./UserMap";

// function Dashboard() {
//   return (
//     <div className="flex flex-col md:flex-row bg-gray-100 p-6 h-screen">
//       {/* Left Section */}
//       <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-4">
//         <h2 className="text-xl font-bold text-blue-600 mb-4">
//           Choose your route
//         </h2>
//         <div className="flex items-center mb-4">
//           <div className="text-6xl text-blue-600 font-bold mr-4">407</div>
//           <div className="flex-1">
//             <p className="text-gray-600">Mapalagama - Galle</p>
//           </div>
//         </div>

//         <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4">
//           <p className="text-sm font-bold">Last Location</p>
//           <p className="font-bold">Mapalagama</p>
//         </div>

//         <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mb-4">
//           <p className="text-sm font-bold">Next Location</p>
//           <p className="font-bold">Galle</p>
//         </div>

//         <div className="bg-gray-50 p-4 rounded-lg">
//           <p className="text-gray-600 mb-2">Start at</p>
//           <div className="flex items-center">
//             <div className="text-4xl font-bold text-blue-600 mr-2">08:00</div>
//             <div>
//               <p className="text-gray-600">You have</p>
//               <p className="font-bold">20 hours 20 minutes</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="md:w-2/3 flex flex-col md:ml-6 mt-6 md:mt-0">
//         {/* Top Info Cards */}
//         <div className="flex space-x-4">
//           <div className="bg-white shadow-lg p-4 rounded-lg flex-1">
//             <p className="font-bold text-gray-600">Starting Point</p>
//             <p className="text-lg font-bold">Mapalagama</p>
//           </div>

//           <div className="bg-white shadow-lg p-4 rounded-lg flex-1">
//             <p className="font-bold text-gray-600">Destination Point</p>
//             <p className="text-lg font-bold">Galle</p>
//           </div>

//           <div className="bg-red-500 text-white p-4 rounded-lg flex flex-col items-center">
//             <p className="font-bold">Live</p>
//             <p className="text-sm">3 minutes ago</p>
//           </div>

//           <div className="bg-yellow-500 text-white p-4 rounded-lg flex flex-col items-center">
//             <p className="font-bold">Scheduled</p>
//             <p className="text-2xl">08:00</p>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="flex-grow bg-white shadow-lg rounded-lg mt-4 p-4">
//           <h2 className="font-bold text-lg mb-2">Your Route</h2>
//           <div className="bg-gray-200 h-[94%] rounded-lg">
//             <UserMap />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

//************************************************************************** */

// import React, { useState, useEffect } from "react";
// import { collection, addDoc, getDocs } from "@firebase/firestore";
// import { firestore } from "../firebase/firebase";
// import UserMap from "./UserMap";

// // Generate random latitude and longitude
// // const getRandomCoordinates = () => {
// //   return {
// //     lat: (Math.random() * 180 - 90).toFixed(6),  // Latitude between -90 and 90
// //     lng: (Math.random() * 360 - 180).toFixed(6), // Longitude between -180 and 180
// //   };
// // };

// function BusTrackingDashboard() {
//   const [routes, setRoutes] = useState([]); // List of all routes
//   const [selectedRoute, setSelectedRoute] = useState(null); // Selected route
//   // const [isDataAdded, setIsDataAdded] = useState(false); // Flag to check if data is added

//   // Function to add random routes to Firestore
//   // const addRandomRoutes = async () => {
//   //   const routesCollection = collection(firestore, "routes");

//   //   for (let i = 1; i <= 10; i++) {
//   //     const stops = [];
//   //     const stopCount = Math.floor(Math.random() * 2) + 6; // Randomly 6 or 7 stops

//   //     for (let j = 0; j < stopCount; j++) {
//   //       stops.push(getRandomCoordinates());
//   //     }

//   //     const route = {
//   //       name: `Route ${i}`,
//   //       startingPoint: stops[0],
//   //       destinationPoint: stops[stops.length - 1],
//   //       stops,
//   //       scheduledTime: "08:00", // Placeholder for scheduled time
//   //     };

//   //     await addDoc(routesCollection, route);
//   //   }

//   //   setIsDataAdded(true);
//   // };

//   // Function to fetch routes from Firestore
//   const fetchRoutes = async () => {
//     const routesCollection = collection(firestore, "routes");
//     const routeSnapshot = await getDocs(routesCollection);
//     const routeList = routeSnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     setRoutes(routeList);
//   };

//   // Fetch routes when the component loads
//   useEffect(() => {
//     fetchRoutes();
//   }, []);

//   // Add random data on button click
//   // const handleAddData = () => {
//   //   addRandomRoutes();
//   // };

//   return (
//     <div className="flex flex-col md:flex-row bg-gray-100 p-6 h-screen">
//       {/* Left Section */}
//       <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-4">
//         <h2 className="text-xl font-bold text-blue-600 mb-4">
//           Choose your route
//         </h2>

//         {/* Button to add random data */}
//         {/* <button
//           onClick={handleAddData}
//           className="bg-blue-500 text-white p-2 rounded-md mb-4"
//         >
//           Add Random Routes
//         </button> */}

//         {/* List of routes */}
//         {routes.map((route) => (
//           <div
//             key={route.id}
//             className="cursor-pointer mb-2 p-2 bg-blue-100 rounded-lg"
//             onClick={() => setSelectedRoute(route)}
//           >
//             {route.name}
//           </div>
//         ))}
//       </div>

//       {/* Right Section */}
//       {selectedRoute && (
//         <div className="md:w-2/3 flex flex-col md:ml-6 mt-6 md:mt-0">
//           {/* Route Details */}
//           <div className="flex space-x-4">
//             <div className="bg-white shadow-lg p-4 rounded-lg flex-1">
//               <p className="font-bold text-gray-600">Starting Point</p>
//               <p className="text-lg font-bold">
//                 Lat: {selectedRoute.startingPoint.lat}, Lng:{" "}
//                 {selectedRoute.startingPoint.lng}
//               </p>
//             </div>

//             <div className="bg-white shadow-lg p-4 rounded-lg flex-1">
//               <p className="font-bold text-gray-600">Destination Point</p>
//               <p className="text-lg font-bold">
//                 Lat: {selectedRoute.destinationPoint.lat}, Lng:{" "}
//                 {selectedRoute.destinationPoint.lng}
//               </p>
//             </div>

//             <div className="bg-yellow-500 text-white p-4 rounded-lg flex flex-col items-center">
//               <p className="font-bold">Scheduled</p>
//               <p className="text-2xl">{selectedRoute.scheduledTime}</p>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="flex-grow bg-white shadow-lg rounded-lg mt-4 p-4">
//             <h2 className="font-bold text-lg mb-2">Your Route</h2>
//                <div className="bg-gray-200 h-[94%] rounded-lg">
//                  <UserMap selectedRoute={selectedRoute}/>
//                </div>
//             {/* <h2 className="font-bold text-lg mb-2">Stops</h2>
//             <ul className="list-disc pl-6">
//               {selectedRoute.stops.map((stop, index) => (
//                 <li key={index}>
//                   Stop {index + 1}: Lat: {stop.lat}, Lng: {stop.lng}
//                 </li>
//               ))}
//             </ul> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BusTrackingDashboard;


import React, { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../firebase/firebase";
import UserMap from "./UserMap";
import DistanceToDestination from "./DistanceToDestination";

function BusTrackingDashboard() {
  const [routes, setRoutes] = useState([]); // List of all routes
  const [selectedRoute, setSelectedRoute] = useState(null); // Selected route
  const [openRouteId, setOpenRouteId] = useState(null); // Store the ID of the route with the open dropdown
  const [userLocation, setUserLocation] = useState(null); // User's current location

  // Function to fetch routes from Firestore
  const fetchRoutes = async () => {
    const routesCollection = collection(firestore, "routes");
    const routeSnapshot = await getDocs(routesCollection);
    const routeList = routeSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setRoutes(routeList);
  };

  // Function to simulate fetching the user's current location
  const fetchUserLocation = () => {
    // You can replace this with actual location fetching logic
    // Assuming userLocation has `lat` and `lng` fields
    setUserLocation({ lat: 12.845, lng: 80.154 }); // Example coordinates
  };

  // Fetch routes when the component loads
  useEffect(() => {
    fetchRoutes();
    fetchUserLocation();
  }, []);

  // Function to calculate the progress based on stops covered relative to the user's current location
  const calculateStopProgress = (stops) => {
    if (!userLocation || stops.length === 0) return 0;

    // Find the closest stop index to the user's current location
    const stopIndex = stops.findIndex((stop) => {
      // Simple distance calculation based on lat/lng
      const distance = Math.sqrt(
        Math.pow(stop.lat - userLocation.lat, 2) +
        Math.pow(stop.lng - userLocation.lng, 2)
      );
      return distance < 0.01; // Adjust this threshold for more precision
    });

    return stopIndex === -1 ? 0 : stopIndex + 1;
  };

  // Handle selecting a route and toggling dropdown visibility
  const handleRouteClick = (route) => {
    if (openRouteId === route.id) {
      // If the same route is clicked again, close the dropdown
      setOpenRouteId(null);
      setSelectedRoute(null);
    } else {
      // Otherwise, open the dropdown for this route
      setOpenRouteId(route.id);
      setSelectedRoute(route);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 h-screen overflow-y-scroll">
      {/* Left Section */}
      <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-4 overflow-y-scroll">
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          Choose your route
        </h2>

        {/* List of routes */}
        {routes.map((route) => (
          <div
            key={route.id}
            className="cursor-pointer mb-2 p-2 bg-blue-100 rounded-lg"
            onClick={() => handleRouteClick(route)}
          >
            <div className="flex items-center">
              {/* Route Name */}
              <div className="flex-1">{route.name}</div>

              {/* Vertical Progress Bar */}
              <div className="relative h-16 w-2 bg-gray-300 rounded-lg ml-4">
                <div
                  className="absolute bg-blue-500 rounded-lg"
                  style={{
                    height: `${(calculateStopProgress(route.stops) /
                      route.stops.length) * 100}%`,
                    bottom: 0,
                    width: "100%",
                  }}
                ></div>
              </div>
            </div>

            {/* Dropdown Section for Stops */}
            {openRouteId === route.id && (
              <div className="bg-white shadow-lg rounded-lg mt-4 p-4 w-full h-full">
                <h2 className="font-bold text-lg mb-2">Stops</h2>

                {/* List of Stops */}
                <ul className="list-none max-h-96 overflow-y-auto">
                  {selectedRoute.stops.map((stop, index) => (
                    <li
                      key={index}
                      className={`border-b border-gray-300 py-2 flex justify-between ${index <
                        calculateStopProgress(selectedRoute.stops)
                        ? "text-blue-600 font-bold"
                        : "text-gray-600"
                        }`}
                    >
                      <div>
                        <span>{stop.name}</span>
                        <p>
                          Lat: {stop.lat}, Lng: {stop.lng}
                        </p>
                      </div>
                      <p className="text-gray-500">{stop.scheduledTime}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Section */}
      {selectedRoute && (
        <div className="md:w-2/3 flex flex-col md:ml-6 mt-6 md:mt-0">
          {/* Route Details */}
          <div className="flex space-x-4">
            <div className="bg-white shadow-lg p-4 rounded-lg flex-1">
              <p className="font-bold text-gray-600">Starting Point</p>
              <p className="text-lg font-bold">
                Lat: {selectedRoute.startingPoint.lat}, Lng:{" "}
                {selectedRoute.startingPoint.lng}
              </p>
            </div>

            <div className="bg-white shadow-lg p-4 rounded-lg flex-1">
              <p className="font-bold text-gray-600">Destination Point</p>
              <p className="text-lg font-bold">
                Lat: {selectedRoute.destinationPoint.lat}, Lng:{" "}
                {selectedRoute.destinationPoint.lng}
              </p>
            </div>

            <DistanceToDestination
              userLocation={userLocation} // pass the user's location
              destinationPoint={selectedRoute.destinationPoint} // pass the destination point
            />

            <div className="bg-yellow-500 text-white p-4 rounded-lg flex flex-col items-center">
              <p className="font-bold">Scheduled</p>
              <p className="text-2xl">{selectedRoute.scheduledTime}</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex-grow bg-white shadow-lg rounded-lg mt-4 p-4">
            <h2 className="font-bold text-lg mb-2">Your Route</h2>
            <div className="bg-gray-200 h-[94%] rounded-lg">
              <UserMap selectedRoute={selectedRoute} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusTrackingDashboard;
