const express = require('express')
const app1 = express()
// const app2 = express()
const port1 = 3001
// const port2 = 3002
// app1.get('/', (req, res) => {
//     res.send('Hello Thirishi!')
// })

// app1.get('/app1', (req, res) => {
//     res.send('Hello app1!')
// })


// parse requests of content-type - application/json
app1.use(express.json());


app1.use('/', express.static('public'))
const testRoutes =require('./routes/route');
app1.use('/mytest', testRoutes);

const testuserRoutes =require('./routes/userRoutes');
app1.use('/users', testuserRoutes);

// app2.get('/test', (req, res) => {
//     res.send('This is a test')
//     })

//     app2.get('/app2', (req, res) => {
//         res.send('hello app2')
//         })



 
app1.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
})

// app2.listen(port2, () => {
//     console.log(`Example app listening at http://localhost:${port2}`)
// })