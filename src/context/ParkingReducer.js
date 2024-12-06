const initialState = {
  parkingLots: [],
};

export const parkingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PARKING_LOTS':
      return {...state, parkingLots: action.payload};
    case 'PARK_CAR':
      return {...state};
    case 'FETCH_CAR':
      return {...state};
    default:
      return state;
  }
};