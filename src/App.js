import React, { Component } from 'react';
import * as action from './store/actions/index';
import {connect} from 'react-redux';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';

import Landing from './components/landing/landing';
import Home from './components/home/home';
import './App.css';
import landing from './components/landing/landing';

class App extends Component {

  componentWillMount = () =>{
    console.log('hey')
  }
  
  render(){
    return(
      <Router>
      <div className="landing">
      <Switch>
        <Route path='/' exact component={ this.props.authenticated? Home : landing}/>
      </Switch>
      </div>
      </Router>
    )
  }
}

const mapStateToProps = state =>{
  return {
    authenticated: state.auth.authenticated
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    ontoggleauthpage: () => dispatch(action.toggleauthpage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
