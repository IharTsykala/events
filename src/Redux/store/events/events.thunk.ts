import { put } from "@redux-saga/core/effects"
import {
  getFailureAction,
  setListEvents,
  setListSports,
} from "./events.actions"
import ServiceEvents from "../../../services/event-service"

export const getListEvents = (
  currentSport: number,
  period: number
) => {
  try {
    return async (dispatch: any) => {
      const listEvents = await ServiceEvents.getListEvents(currentSport, period)
      dispatch(setListEvents(listEvents.events))
      const newArrSport = [{ id: 0, name: "Все виды спорта" }].concat(
        listEvents.sports
      )
      dispatch(setListSports(newArrSport))
    }
  } catch (e) {
    return (dispatch: any) => {
      dispatch(getFailureAction(e))
    }
  }
}
// these will error (loading)
