// to authenticate user
const db = require("../config")
const {sign, verify} = require("jsonwebtoken")
const {createToken} = require('../middleware/authenticateUser')


function createToken(user) {
 return sign ({
 emailAdd: user.emailAdd, //payload refers to the information the user inputs like their email.
userPass: user.userPass
},
process.env.SECRET_KEY,
{
expiresIn: '1h'
}
    )
};

module.exports = {
    createToken
}

