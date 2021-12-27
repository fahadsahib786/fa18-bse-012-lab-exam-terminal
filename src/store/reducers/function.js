import React from 'react';
import * as actiontype from './../actions/actiontypes';

const initialstate = {
    functionpage: false,
    loading: false
}

const functionreducer = (state=initialstate, action) =>{
    switch(action.type){
        case(actiontype.TOGGLE_FUNCTIONPAGE):
        return{
            ...state,
            functionpage: !state.functionpage
        }
        default:
            return state;
    }
}


export default functionreducer;