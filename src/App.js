import React from 'react';
import { ParkingProvider } from './context/ParkingContext';
import ParkingLotTable from './components/ParkingLotTable';
const App = () => {
  return (
    <ParkingProvider>
      <div className="app-container">
        <h1>Parking Lot Manager</h1>
        <ParkingLotTable />
      </div>
    </ParkingProvider>
  );
};
export default App;