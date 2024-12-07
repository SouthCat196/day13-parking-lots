import React from 'react';
import Parking from './Parking';
import { Card, Row, Col } from 'antd';
import '../css/ParkingLot.css';

const ParkingLot = ({ lot }) => {
  console.log('lot:', lot);
  const sortedTickets = lot.tickets.sort((a, b) => a.position - b.position);

  const allPositions = Array.from({ length: lot.capacity }, (_, index) => {
    const ticket = sortedTickets.find(ticket => ticket.position === index + 1);
    return ticket ? ticket : { position: index + 1, plateNumber: ' ' };
  });

  return (
    <Card title={lot.name} className="parking-lot-card">
      <Row gutter={[16, 16]}>
        {allPositions.map((ticket, index) => (
          <Col key={index} span={8}>
            <Parking ticket={ticket} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default ParkingLot;