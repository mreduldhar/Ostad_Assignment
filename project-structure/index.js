const app = require('./app')

const port = process.env.RUNNING_PORT || 8080;

app.listen(port, function(){
    console.log(`Server is running at http://localhost:${port}`)
})