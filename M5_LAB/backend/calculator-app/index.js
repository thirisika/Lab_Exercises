const app=require('./app.js')

const port1 = 3000

// app.get('/app2', (req, res) => {
//             res.send('hello app2')
//             })


// const testRoutes =require('./routes/route');
// app.use('/calculator', testRoutes);

app.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
})