const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())

app.get('/', (req, res) => {
    res.send('Collaborative server is running')
})

app.listen(port, () => {
    console.log('Server is running')
})