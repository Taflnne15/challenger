const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = express.Router()
//import all model objects
const {users} = require('../model')

routes.get('^/$|/challenger', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
routes.put('/users/:id', bodyParser.json(),(
req,res)=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req , res)=>{
    users.deleteUser(req,res)
})

module.exports = {
    express,
    route
}