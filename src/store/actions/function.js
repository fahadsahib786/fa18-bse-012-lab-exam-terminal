import * as actiontype from './actiontypes';
import axios from 'axios';

export const togglefunctionpage = () =>{
    return{
        type: actiontype.TOGGLE_FUNCTIONPAGE
    }
};

export const updatestart = () =>{
    return{
        type: actiontype.UPDATE_START
    }
}

export const update = (day,month,year,plan) =>{
    return dispatch =>{
        dispatch(updatestart())
        const plan = {
            day: day,
            month: month,
            year: year,
            plan: plan 
        }
        //post request
    }
}