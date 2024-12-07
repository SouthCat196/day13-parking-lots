import React from 'react';
import {ParkingProvider} from './context/ParkingContext';
import ParkingLotTable from './components/ParkingLotTable';

const App = () => {
  return (
    <ParkingProvider>
      <ParkingLotTable/>
    </ParkingProvider>
  );
};
export default App;