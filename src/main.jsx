import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from "./Store/Store.js"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

//👉 Proving the Store to the Whole application for data flow accross applicationn
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
)
