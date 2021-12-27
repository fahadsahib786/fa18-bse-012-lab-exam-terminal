import React, { Component } from 'react';
import {connect} from 'react-redux';

import './update.css';
import * as action from './../../store/actions/index';


class update extends Component {

    state = {
        day:null,
        month:null,
        year:null,
        plan: null
    }

    changehandler = input => event =>{
        event.preventDefault();
        this.setState({[input]: event.target.value});
    }

    updatehandler = () =>{
        this.props.onupdate(this.state.day,this.state.month,this.state.year,this.state.plan)
    }

    render(){
        return(
            <div className="updatecontent">
                <p className="update1">Enter Date of Plan</p>
               <div className="dateinput">
                   <input className="inputx" value={this.state.day} placeholder="DAY" onChange={this.changehandler('day')}/>
                   <input className="inputx" value={this.state.month} placeholder="MONTH" onChange={this.changehandler('month')}/>
                   <input className="inputx" value={this.state.year} placeholder="YEAR" onChange={this.changehandler('year')}/>
               </div>
               <p className="update2">Enter Your Plans</p>
               <div className="plan">
                   <textarea className="planinput" value={this.state.plan} onChange={this.changehandler('plan')} cols='30' rows='5'/>
               </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onupdate : (day,month,year,plan) => dispatch(action.update(day=day,month=month,year=year,plan=plan))
    }
}

export default connect(null,mapDispatchToProps)(update);