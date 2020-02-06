require('dotenv').config();
const express = require ('express')

const app = express()
app.get('/', (req, res) => {
    return res.send('Hello word')
})


app.listen(process.env.ACCESS_URL)