import { put, takeEvery } from "redux-saga/effects"
import {ActionTypes, setListEvents, getFailureAction, setListSports} from "./events.actions"
import ServiceEvents from "../../../services/event-service"

function* setListEventsSaga(actions: any) {
  try {
    // these will loading
    const listEvents = yield ServiceEvents.getListEvents(
      actions.payload.numberEvent, actions.payload.period
    )
    // these will loaded of notFound in if/else
    // console.log(listEvents.events)
    yield put(setListEvents(listEvents.events))
    // console.log(listEvents.sports)
    yield put(setListSports(listEvents.sports))

  } catch (e) {
    // these will error (loading)
    yield put(getFailureAction(e))
  }
}

export default function* eventsSaga() {
  yield takeEvery(
    ActionTypes.GET_LIST_EVENTS,
    setListEventsSaga
  )
}
