const express = require('express');
const router = express.Router();

router.get('/app1', (req, res) => {
    res.send('Hello app1!')
})

router.get('/test', (req, res) => {
    res.send('This is a test')
    })

 router.get('/app2', (req, res) => {
    res.send('hello app2')
    })


module.exports = router