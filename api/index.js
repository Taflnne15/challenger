const {express,routes} = require('./controller')
const path = require('path')
const app = express()
const port = +process.env.PORT || 3000
//STATIC
app.use(express.static('./static'))
app.use(express.urlencoded({
    extended: false
}),
routes
),
routes.get('^/$|/Challenger',(req,res) =>{
res.sendfile(path.resolve(__dirname,'./static/html/index.html'))
})
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})


