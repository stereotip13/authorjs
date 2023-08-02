import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //строчка для расширения в браузере для редакса
)
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
