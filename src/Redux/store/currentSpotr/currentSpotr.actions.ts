import { Action } from "../../interfacesAction/action.interface"
import { CardItem } from "../../InterfacesEntity/CardItem.interface"

export const ActionTypes = {
  SET_CURRENT_SPORT: "[currentSport] Set current sport",

  GET_FAILURE: "[getFailure] Get failure",
}

export const setCurrentSport = (
    currentSport: string
): Action<string> => ({
  type: ActionTypes.SET_CURRENT_SPORT,
  payload: currentSport,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
