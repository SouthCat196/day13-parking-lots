import {createContext, useReducer} from "react";
import {initialState, parkingReducer} from "./ParkingReducer";

export const ParkingContext = createContext()

export const ParkingProvider = ({children}) => {
  const [state, dispatch] = useReducer(parkingReducer, initialState)
  return <ParkingContext.Provider value={{state, dispatch}}>{children}</ParkingContext.Provider>
}