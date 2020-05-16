import { combineReducers } from "redux"
import { eventsReducer } from "./store/events/events.reduser"
import { currentSportReducer } from "./store/currentSpotr/currentSpotr.reduser"
import {  periodReducer } from "./store/period/period.reduser"

export default combineReducers({
  listEvents: eventsReducer,
  currentSport: currentSportReducer,
  period: periodReducer,
})
