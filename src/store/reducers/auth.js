import React from 'react';
import * as actiontype from './../actions/actiontypes';

const initialstate = {
    authpage: false,
    name:null,
    userid:null,
    authenticated:false,
    loading: false
}

const authreducer = (state=initialstate,action) =>{
    switch(action.type){
        case(actiontype.TOGGLE_AUTHPAGE):
        return{
            ...state,
            authpage: !state.authpage
        }
        case(actiontype.AUTH_START):
        return{
            ...state,
            loading: true,
        }
        case(actiontype.AUTH_SUCCESS):
        return{
            ...state,
            name: action.name,
            authenticated: true,
            authpage:false,
            userid: action.userid,
            loading: false
        }
        default:
            return state;
    }
}

export default authreducer ;