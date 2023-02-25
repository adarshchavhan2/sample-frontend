import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/main.scss'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
