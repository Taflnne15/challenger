const db = require ("../config")
// This will have all the functionality
const {hash, compare, hashSync} = require ('bcrypt')
// const {createToken} = require('../middleware/authenticateUser')
class Users{
    fetchUsers(req, res){
        const query =`
        SELECT userID, firstName, lastName, gender, userDOB,
        emailAdd, profileURL
        FROM Users; `
        db.query(query,
             (err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
             } )
    }
    fetchUser(req, res){
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB,
        emailAdd, profileURL
        FROM Users
        where userID = ${req.params.id};
        `
        db.query(query,
            (err, result) => {
               if(err) throw err
               res.json({
                   status: res.statusCode,
                   results
               })
            } )
    }
    login(req,res){
       const {emailAdd, userPass} = req.body;

       const query =`
       SELECT firstName, lastName, gender, userDOB, emailAdd, userPass, profileUrl
       FROM Users 
       WHERE emailAdd = '${emailAdd}';
       `
       db.query(query , async (err , results)=>{
if (err) throw err;
if (!results?.length) {
    res.json({
        status: res.statusCode,
        msg: "You Provided a wrong email",
    });
} else {
compare(userPass, results[0].userPass, (cErr, cResult)=>{
    if (cErr) throw cErr;
    //create token
    const token = createToken({
        emailAdd,
        httpOnly
    });
    //save token
    res.cookie("LegitUser", token ,{
        maxAge: 3600000,
        httpOnly: true
    });
    if(cResult){
        res.json({
            msg: "Logged In",
            token,
            result: results[0]
        });
    } else {
        res.json({
            status: res.statusCode,
            msg: "Invalid Password or you have not registered"
        });
    }
});


}
});
}
   async register(req,res){
        const data = req.body
        // Encrypt password
        data.userPass = hash(data.userPass,15)
        //Payload
        const user = {
            emailAdd:data.emailAdd,
            userPass:data.userPass
        }
        //creating user detail
        //Query
        const query = `
        INSERT INTO Users
        SET ?
        `
        // if you dont wanna use set ypu can use 'values(?,?,?,?,?,?,?,?)'
        db.query(query,[data],(err) => {
            if(err) throw err
            // create a Token
            let token = createToken(user)
            res.cookie("LegitUser", token,
            {
                maxAge: 3600000,
                httpOnly: true
            });
            res.json ({
                status: res.statusCode,
                token,
                msg: "You are now registered"
            })
        })
        // db.query(query, (err) => {
        //     if(err) throw err
        //     res.cookie()
        // })
        // async register(rew)
    }
    updateUser(req,res){
    const query =`
        UPDATE Users
        SET?
        WHERE userID =?
        `
        db.query(query,[req,body, req.params],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"The user record was updated."
                })
            })
    }
    deleteUser(req,res){
        const query =
         `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'The user records were deleted.'
        })
        })
    }
}
module.exports =  Users