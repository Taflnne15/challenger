// database configurations 
require("dotenv").config()
const{createPool}=require("mysql")
const connection = createPool({
    host: process.env.dbHost,
database: process.env.dbName,
user: process.env.dbUser,
password: process.env.dbPassword,
multipleStatements: true,
connectionLimit: 30 
})
module.exports={
    connection
}