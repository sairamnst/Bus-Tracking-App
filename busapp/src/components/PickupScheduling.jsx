import React, { useState } from 'react';

function PickupScheduling() {
  const [pickupPoint, setPickupPoint] = useState('');

  const handleSchedule = () => {
    // Schedule pickup logic
    console.log(`Pickup scheduled at ${pickupPoint}`);
  };

  return (
    <div>
      <h2>Pickup Scheduling</h2>
      <input type="text" placeholder="Enter pickup point" value={pickupPoint} onChange={(e) => setPickupPoint(e.target.value)} />
      <button onClick={handleSchedule}>Schedule Pickup</button>
    </div>
  );
}

export default PickupScheduling;
