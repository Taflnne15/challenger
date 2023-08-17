const {express,routes} = require('./controller')
const path = require('path')
const app = express()
const cors = require('cors')
//Importing error handling middleware
const errorHandling = require('./middleware/errorHandling')
const cookieParser = require('cookie-parser')
const port = +process.env.PORT || 3000

//STATIC
app.use((req, res, next)=>{
    // Middleware - APplication level
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Methods", "*");
      res.header("Access-Control-Request-Methods", "*");
      res.header("Access-Control-Allow-Headers", "*");
      res.header("Access-Control-Expose-Headers", "Authorization");
      next();
    });
    // cookieParser & Router
    // cookieParser should be set before router
    app.use(cookieParser(), cors(), router);
    app.use(
      express.json(),
      express.urlencoded({
        extended: true,
      })
    );
    // Handling all errors
    app.use(errorHandling);
    // Server
})
app.use(
    express.static('./static'),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    routes
)
routes.get('^/$|/Challenger',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'./static/html/index.html'))
})
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})


