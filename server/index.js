const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

//-------destructure-------//
const { getHouses, createHouse, updateHouse, deleteHouse } = require("./controller.js")

//-------endpoints-------//
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

//-------listen--------//

app.listen(4004, () => {console.log('Up on 4004!')})