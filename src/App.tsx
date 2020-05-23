import React from "react"
import "./App.scss"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
// import createSagaMiddleware from "redux-saga"
import thunk from "redux-thunk"
import rootReducer from "./Redux/index"
import eventsSaga from "./Redux/store/events/events.sagas"
import StaticItem from "./Landing/StaticPast/StaticPast"
import DinamicItem from "./Landing/DinamicPast/DinamicPast"

// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(thunk)
  )
)

// sagaMiddleware.run(eventsSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <div className={"wrapper"}>
      <StaticItem />
      <DinamicItem />
    </div>
  </Provider>
)

export default App
