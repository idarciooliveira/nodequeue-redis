const app = require('./server');
require('./config/database')
const port = 3333 || process.env.PORT;

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})