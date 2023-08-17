// books
const db = require("../config")
class Books {
fetchBooks(req, res){
    const query = `
    SELECT bookId , bookTitl, category, bookUrl 
    FROM Books;
    `
    db.query(query, (err, data)=>{
        if (err) throw err 
        res.json({
            status: res.statusCode,
            data
        });
    });
}
updateBooks(req, res){
const query = `
UPDATES Books SET ?
WHERE BooksID;
`
db.query(query [req, body , req.params.ID],
(err) => {
    if (err) throw err
    res.json({
        status: res.statusCode,
        msg: "The books record was updated"
});
}
)}
deleteBooks(req, res){
   const query = `
   DELETE FROM Books 
   WHERE BooksID = ${req.params.id};
   ` 
db.query(query, (err)=> {
    if (err) throw err 
    res.json({
        status: res.statusCode,
        msg: "The books record was deleted"
    });
});
}
createBooks (req, res){
   const query = `
   INSERT INTO Books 
   SET ? 
   `
    db.query(query, (err)=> {
        if (err) throw err 
        res.json({
            status: res.statusCode,
            msg: "The Book has been updated"
        })
    })
}

}

module.exports =  Books