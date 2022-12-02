const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/database')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const port = process.env.PORT || 4000

app.listen(port, '0.0.0.0', () => console.log('Listening on port 4000'))
