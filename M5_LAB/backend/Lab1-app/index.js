const express = require('express')
const app1 = express()
const app2 = express()

const port1 = 3001
const port2 = 3002



// create backend application with multiple web servers
app1.get('/', (req, res) => {
res.send('Hello App1!')
})

app1.get('/testapp1', (req, res) => {
    res.send('This is a App1 test')
})


app2.get('/app2', (req, res) => {
    res.send('Hello App2!')
 })
        
app2.get('/testapp2', (req, res) => {
    res.send('This is a App2 test')
})


//backend application running with different ports
app1.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
})

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`)
})