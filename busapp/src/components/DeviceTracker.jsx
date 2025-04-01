import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const DeviceTracker = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Device 1' },
    { id: 2, name: 'Device 2' },
    { id: 3, name: 'Device 3' },
  ]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [deviceLocation, setDeviceLocation] = useState({ lat: [], lon: [] });

  // Function to simulate fetching GPS data for a selected device
  const fetchDeviceLocation = (deviceId) => {
    // Here you would normally fetch the data from an API
    const interval = setInterval(() => {
      const newLat = 12.9716 + Math.random() * 0.01;
      const newLon = 77.5946 + Math.random() * 0.01;

      setDeviceLocation((prevLocation) => ({
        lat: [...prevLocation.lat, newLat],
        lon: [...prevLocation.lon, newLon],
      }));
    }, 2000);

    return interval;
  };

  useEffect(() => {
    if (selectedDevice) {
      const interval = fetchDeviceLocation(selectedDevice.id);
      return () => clearInterval(interval); // Cleanup on unmount or when device changes
    }
  }, [selectedDevice]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '20%', padding: '10px' }}>
        <h3>Devices</h3>
        <ul>
          {devices.map((device) => (
            <li
              key={device.id}
              style={{
                cursor: 'pointer',
                color: selectedDevice?.id === device.id ? 'blue' : 'black',
              }}
              onClick={() => {
                setSelectedDevice(device);
                setDeviceLocation({ lat: [], lon: [] }); // Reset location data on new selection
              }}
            >
              {device.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '80%', padding: '10px' }}>
        <h3>{selectedDevice ? `Tracking: ${selectedDevice.name}` : 'Select a device to track'}</h3>
        {selectedDevice && (
          <Plot
            data={[
              {
                type: 'scattergeo',
                mode: 'lines+markers',
                lat: deviceLocation.lat,
                lon: deviceLocation.lon,
                line: { width: 2, color: 'blue' },
                marker: { size: 6, color: 'red' },
              },
            ]}
            layout={{
              geo: {
                resolution: 50,
                showcoastlines: true,
                coastlinecolor: 'black',
                showland: true,
                landcolor: 'rgb(243, 243, 243)',
                showlakes: true,
                lakecolor: 'rgb(255, 255, 255)',
                projection: { type: 'equirectangular' },
              },
            }}
            useResizeHandler
            style={{ width: '500px', height: '500px' }}
          />
        )}
      </div>
    </div>
  );
};

export default DeviceTracker;
