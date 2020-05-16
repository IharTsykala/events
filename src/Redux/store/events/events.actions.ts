import { Action } from "../../interfacesAction/action.interface"
import { CardItem } from "../../InterfacesEntity/CardItem.interface"

export const ActionTypes = {
  GET_LIST_EVENTS: "[Events] Get list events",
  SET_LIST_EVENTS: "[Events] Set list events",
  SET_LIST_SPORTS: "[Sports] Set list sports",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getListEvents = (
  numberEvent: number,
  period: number
): Action<{}> => ({
  type: ActionTypes.GET_LIST_EVENTS,
  payload: { numberEvent, period },
})

export const setListEvents = (listEvents: []): Action<[]> => ({
  type: ActionTypes.SET_LIST_EVENTS,
  payload: listEvents,
})

export const setListSports = (listSports: []): Action<[]> => ({
  type: ActionTypes.SET_LIST_SPORTS,
  payload: listSports,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
