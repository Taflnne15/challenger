// bookauthors
const db = require("../config")

class BookAuthors {
fetchBookAuthor(req, res ){
    const query = `
    SELECT id , authorName , authorSurname , bookID
    FROM BookAuthor;
    `
    db.query(query, (err, data)=>{
if(err) throw err 
res.json({
    status: res.statusCode ,
    data
});
});
}

updateBookAuthor(req, res){
    const query = `
   UPDATE BookAuthor SET ?
   WHERE  id ;
    `
db.query(query [req , body, req.params.id ],
    (err)=>{
       if (err) throw err
       res.json({
        status: statusCode,
       msg: "The BookAuhor record has been updated"
       }) ;
    });
}

deleteBookAuthor(req, res){
    const query = `
    DELETE FROM BookAuthor
    WHERE id ;
    `
    db.query(query, (err)=>{
       if (err) throw err
       res.json({
        status: statusCode,
        msg: "The BookAuthor record has been updated"
       }) ;
    });
}
 createBookAuthor(req, res){
    const query = `
    INSERT INTO BookAuthor 
    SET ?
    `
    db.query(query, (err)=>{
        if (err) throw err
        res.json({
            status: statusCode,
            msg: "The record BOkkAuthor has been created"
        })
    })
 }






}

module.exports =  BookAuthors