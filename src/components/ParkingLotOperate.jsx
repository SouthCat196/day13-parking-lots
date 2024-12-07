import React, {useState, useContext} from 'react';
import {Button, Input, Select, Row, Col, message} from 'antd';
import {ParkingContext} from '../context/ParkingContext';
import {postParking, postFetch} from '../api/api';
import '../css/ParkingLotOperate.css';

const {Option} = Select;

const ParkingLotOperate = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [strategy, setStrategy] = useState('Standard');
  const {dispatch} = useContext(ParkingContext);

  const validatePlateNumber = () => {
    if (!plateNumber) {
      message.error('Plate Number cannot be empty');
      return false;
    }
    if (plateNumber.length !== 7) {
      message.error('Plate Number must be 7 characters long');
      return false;
    }
    return true;
  };

  const handlePark = async () => {
    if (!validatePlateNumber()) return;
    try {
      const response = await postParking({plateNumber}, strategy);
      dispatch({type: 'PARK_CAR', payload: response});
    } catch (error) {
      console.error('Error parking the car:', error);
    }
  };

  const handleFetch = async () => {
    if (!validatePlateNumber()) return;
    try {
      const response = await postFetch({plateNumber});
      message.success(`Car with plate number ${response.car.plateNumber} has been parked for ${response.parkingDuration} minutes. Parking fee: $${response.parkingFee}.`);
      dispatch({type: 'FETCH_CAR', payload: response});
    } catch (error) {
      console.error('Error fetching the car:', error);
    }
  };

  return (
    <div className="parking-lot-operate-container">
      <Row gutter={16}>
        <Col>
          <Input
            placeholder="Plate Number"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
          />
        </Col>
        <Col>
          <Select value={strategy} onChange={(value) => setStrategy(value)}>
            <Option value="Standard">Standard</Option>
            <Option value="Smart">Smart</Option>
            <Option value="Super">Super</Option>
          </Select>
        </Col>
        <Col>
          <Button type="primary" onClick={handlePark}>Park</Button>
        </Col>
        <Col>
          <Button type="primary" onClick={handleFetch}>Fetch</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ParkingLotOperate;