import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Reducers/keg-list-reducer'
import seedKegs from './Data/seedKegs'
import App from './App'

const defaultStore = {
  seedKegs,
  selectedKeg: null,
  formVisible: false,
}

const store = createStore(reducer, defaultStore)

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById(`root`)
)
