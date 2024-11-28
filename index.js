import db from './dbconnect.js';
import express from 'express';

const app = express()
const port = 3000

import studentRoute from './routes/student.js'
import courseRoute from './routes/course.js'

//== testing ================== routes ===========
app.get('/', (req, res) => {
    res.send('HI :)!')
})

app.get('/test', (req, res) => {
    res.send('For testing purpose!')
})

//== testing ================== routes ===========

//Studnets section
app.use("/", studentRoute)


//courses section
app.use("/", courseRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


