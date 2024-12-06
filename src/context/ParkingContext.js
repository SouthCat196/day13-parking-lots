import {createContext, useReducer} from "react";
import {initialState} from "./todoReducer";
import {parkingReducer} from "./ParkingReducer";

export const ParkingContext = createContext()

export const TodoProvider = ({children}) => {
  const [state, dispatch] = useReducer(parkingReducer, initialState)
  return <ParkingContext.Provider value={{state, dispatch}}>{children}</ParkingContext.Provider>
}