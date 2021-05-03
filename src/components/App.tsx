import React from 'react'

import {Redirect, Route, Switch, useParams} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Navbar from './shared/Navbar'
import TrainingDetailsPage from './pages/TrainingDetailsPage'

import Footer from './shared/Footer/Footer';
import NoMatch from './pages/NoMatch/NoMatch';

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

        <Route exact path="/details/:id" component={TrainingDetailsPage}></Route>
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </>
  )
}
export default App
