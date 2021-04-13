import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter, Route} from 'react-router-dom'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
)
