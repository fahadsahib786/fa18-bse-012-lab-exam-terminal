import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './../../store/actions/index';

import './auth.css'



class auth extends Component {
    state={
        signup:false,
        name:'',
        username:'',
        password:''
    }
    
    switchauthmodehandler = () =>{
        this.setState(prevstate =>{
            return {signup: !prevstate.signup}
        })
    }
 
    inputchangehandler = input => event =>{
        event.preventDefault();
        this.setState({[input]: event.target.value});
    }

    
    submithandler = () =>{
        console.log(this.state.username);
        this.props.onauth(this.state.name, this.state.username, this.state.password, this.state.signup);
    }

    render(){
    return(
        <div className="authenticate">
                <button className="modebutton hvr-grow" onClick={this.switchauthmodehandler}>Switch to {this.state.signup ? 'SignIn' : 'SignUp'}</button>
                <br/>
                <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    value = {this.state.name}
                    onChange= {this.inputchangehandler('name')}
                    style={this.state.signup? null : {display:"none"}}
                ></input>
                <br/>
                <input
                    className="input"
                    placeholder="Username"
                    value = {this.state.username}
                    onChange= {this.inputchangehandler('username')}
                ></input>
                <br/>
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value = {this.state.password}
                    onChange= {this.inputchangehandler('password')}
                ></input>
                <br/>
                <button onClick={this.submithandler} className="submitbutton hvr-grow ">{this.state.signup ? 'SignUp' : 'SignIn'}</button>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return{
        loading: state.auth.loading,
        authenticated: state.auth.authenticated
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onauth: (name, username, password, signup) => dispatch(action.auth(name=name, username=username, password=password, signup=signup))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(auth);