import React, {useContext, useEffect} from 'react';
import {ParkingContext} from '../context/ParkingContext';
import ParkingLot from './ParkingLot';
import {Row, Col} from 'antd';
import '../css/ParkingLotGroup.css';
import {getParking} from "../api/api";

const ParkingLotGroup = () => {
  const {state, dispatch} = useContext(ParkingContext);

  useEffect(() => {
    getParking().then((data) => {
      dispatch({type: 'SET_PARKING_LOTS', payload: data});
      console.log(data);
    });
  }, [dispatch]);

  return (
    <Row gutter={[16, 16]}>
      {state.parkingLots.map((lot) => (
        <Col key={lot.id} span={8}>
          <ParkingLot lot={lot}/>
        </Col>
      ))}
    </Row>
  );
};

export default ParkingLotGroup;