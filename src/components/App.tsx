import React from 'react'

import {Redirect, Route, Switch, useParams} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Navbar from './shared/Navbar'
import TrainingDetailsPage from './pages/TrainingDetailsPage'
import {configure} from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'

const axios = Axios.create({

  baseURL: 'http://localhost:8085/api',

})
const cache = new LRU({max: 20})

configure({axios, cache})

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>

        <Route path="/details/:id" component={TrainingDetailsPage}></Route>

      </Switch>
    </>
  )
}
export default App
