import { Action } from "../../interfacesAction/action.interface"
import { CardItem } from "../../InterfacesEntity/CardItem.interface"

export const ActionTypes = {
  SET_PERIOD: "[period] Set period",

  GET_FAILURE: "[getFailure] Get failure",
}

export const setPeriod = (
): Action<any> => ({
  type: ActionTypes.SET_PERIOD,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
