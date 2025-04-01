// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './homecomponents/Navbar';
// import Footer from './homecomponents/Footer';
// import Home from './pages/Home';
// import './App.css';
// import DeviceTracker from './components/DeviceTracker';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tracker" element={<DeviceTracker />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
// import Login from './components/Login';
import ProximityMap from './components/ProximityMap';
import PickupScheduling from './components/PickupScheduling';
import Notifications from './components/Notifications';
import Map from './pages/Map';

import Login from './components/auth/login';
import Register from './components/auth/register';
import { AuthProvider } from './contexts/authContexts';

import Navbar from './homecomponents/Navbar';
import Footer from './homecomponents/Footer';

import "./App.css";
import Home from './pages/Home';
import {SignOut} from './components/auth/logout';

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    // {
    //   path: "/proximity",
    //   element: <ProximityMap />,
    // },
    {
      path: "/tracker",
      element: <Map />,
    },
    // {
    //   path: "/notifications",
    //   element: <Notifications />,
    // },
    // {
    //   path: "/map",
    //   element: <Map />,
    // },
  ];

  let routesElement= useRoutes(routesArray);
  
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">
        <Navbar />
          {routesElement}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
