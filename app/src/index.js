const app = require('./infra/server')
const appRoutes = require('./routes/routes')
const authMiddleware = require('./middleware/basicAuth')
require('dotenv').config()

app.use(authMiddleware, appRoutes)

app.listen(process.env.PORT || 8080, ()=>{
    console.log("server runing in port: " + process.env.PORT || 8080)
})

module.exports = app;