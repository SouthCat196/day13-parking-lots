import React from 'react';
import '../css/Parking.css';

const Parking = ({ticket}) => {
  return (
    <div className={`parking ${ticket.plateNumber === ' ' ? 'empty' : 'occupied'}`}>
      {ticket.plateNumber}
    </div>
  );
};

export default Parking;