// import { CardItem } from "../../InterfacesEntity/CardItem.interface"
import { ActionTypes } from "./events.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
	listEvents: [],
    ListSports: [],
}

const initialState: State = {
    listEvents: [],
    ListSports: [],
}

export const eventsReducer = (
  state: State = initialState,
  action: Action<[]>
) => {
  switch (action.type) {
  case ActionTypes.SET_LIST_EVENTS:
    return {
      ...state,
      listEvents: action.payload
    }
    case ActionTypes.SET_LIST_SPORTS:
      return {
        ...state,
        listSports: action.payload
      }
  default:
    return state
  }
}
