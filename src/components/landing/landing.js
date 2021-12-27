import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../store/actions/index';

import './landing.css';
import Modal from './../Modal/Modal';
import Auth from './../auth/auth';

class landing extends Component {
  
    toggleauthpage = () =>{
      this.props.ontoggleauthpage()
      console.log(this.props.authpage)
    }
  
    render(){
      let auth= null;
          if(this.props.authpage){
              auth= <Auth toggleauthpage={this.toggleauthpage}/>
      }
      return(
        <div className="landing">
          <Modal show={this.props.authpage} togglepage={this.toggleauthpage}>
            {auth}
          </Modal>
          {/* <div className="backgroud-video">
              <video autoPlay loop muted className="video" >
                <source src='v.mp4' type='video/mp4' />
              </video>
          </div> */}
          <div className="heading1">
            <p>To-Do</p>
          </div>
          <div className="heading2">
            <p>Mange Your Daily Tasks</p>
          </div>
          <div className="auth">
            <button onClick={this.toggleauthpage}  className={ this.props.authenticated ? "disappear" : this.props.authpage?  "disappear" : "authbutton hvr-pulse"}>Authenticate</button>
          </div>
        </div>
      )
    }
  }
  
  const mapStateToProps = state =>{
    return {
      authpage: state.auth.authpage,
      authenticated: state.auth.authenticated
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
      ontoggleauthpage: () => dispatch(action.toggleauthpage())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(landing);
  