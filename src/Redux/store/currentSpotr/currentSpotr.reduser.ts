// import { CardItem } from "../../InterfacesEntity/CardItem.interface"
import { ActionTypes } from "./currentSpotr.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  currentSport: number,
}

const initialState: State = {
    currentSport: 0
}

export const currentSportReducer = (
  state: State = initialState,
  action: Action<any>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_SPORT:
    return {
      ...state,
      currentSport: action.payload
    }
  default:
    return state
  }
}
