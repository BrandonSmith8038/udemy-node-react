import React, {Component} from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import * as actions from '../actions'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>Survey New</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount(){
    this.props.fetchUser()
  }
  
  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={Landing} exact/>
            <Route path="/surveys" component={Dashboard} exact />
            <Route path="/surverys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)