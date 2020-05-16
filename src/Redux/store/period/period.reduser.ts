// import { CardItem } from "../../InterfacesEntity/CardItem.interface"
import { ActionTypes } from "./period.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  period: boolean,
}

const initialState: State = {
    period: false
}

export const periodReducer = (
  state: State = initialState,
  action: Action<number>
) => {
  switch (action.type) {
  case ActionTypes.SET_PERIOD:
    return {
      ...state,
      period: !state.period
    }
  default:
    return state
  }
}
