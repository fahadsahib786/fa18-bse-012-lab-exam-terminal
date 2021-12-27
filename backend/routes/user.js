const Router = require('express').Router();

let User = require('../models/user');

Router.route('/').get((req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

Router.route('/signup').post((req, res)=> {
    const newUser =  new User(req.body)
    console.log(newUser)
    newUser.save()
    .then(()=> res.json(newUser)
    )
    .catch(err => res.status(400).json('Error: ' + err));
})

Router.route('/signin').post(async(req,res)=>{
    try{
    const user=await User.find({username:req.body.username,password:req.body.password})
        if(!user[0]){
            console.log('Error logging in')
        }
        console.log(user[0])
        res.json(user[0]);
    }catch(e){
        res.status(500).send()
    }
})



module.exports = Router;