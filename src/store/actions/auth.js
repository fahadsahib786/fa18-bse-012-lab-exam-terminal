import * as actiontype from './actiontypes';
import axios from 'axios';

export const toggleauthpage = () =>{
    return{
        type: actiontype.TOGGLE_AUTHPAGE
    }
};


export const authstart = () =>{
    return{
        type: actiontype.AUTH_START
    }
}

export const authsuccess = (user) =>{
    return{
        type: actiontype.AUTH_SUCCESS,
        name: user.data.name,
        userid: user.data._id,
        authenticated: true
    }
}

export const auth = (name, username, password, issignup) => {
    return dispatch =>{
        dispatch(authstart())
        const authdata = {
            name: name,
            username: username,
            password: password
        }
        let url = 'http://localhost:3000/users/signin'
        if(issignup){
            url = 'http://localhost:3000/users/signup'
        }
        axios.post(url, authdata)
        .then(user =>{
            console.log(user)
            dispatch(authsuccess(user))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}