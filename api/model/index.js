// import models
const Users = require('./Users')
const Orders = require("./Order")
const Books = require("./Books")
const BookAuhor = require("./BookAuthors")

module.exportsn= {
users: new Users (),
books: new Books (),
authors: new BookAuhor(),
orders: new Orders()
}