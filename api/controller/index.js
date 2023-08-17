const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { verifyAToken } = require('../middleware/AuthenticateUser');
const routes = express.Router()
//import all model objects
const {users, books,authors,orders} = require('../model')


routes.get('^/$|/challenger', (req, res, next)=>{
    users.fetchUsers(req, res)
console.log("Welcome Back User")
    
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
routes.patch('/users/:id', bodyParser.json(),(
req,res)=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req , res)=>{
    users.deleteUser(req,res)
})
 //Books router//
//  routes.get('/books', verifyAToken, )

module.exports = {
    express,
    routes
}