const houses = require('./db.json')
upcomingId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const deleteId = req.params.id
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {id, address, price, imageURL} = req.body

        let greatestId = -1
        for(let i=0;i<houses.length; i++) {
            if (houses[i].id > greatestId) {
                greatestId = houses[i].id
            }
        }
        let nextId = greatestId + 1

        let newHouse = {
            id: nextId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        let newId = req.params.id
        let type = req.body.type
        let newIndex = houses.findIndex(element => element.id === +newId)
        if (type === 'plus') {
            houses[newIndex].price=houses[newIndex].price + 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[newIndex].price=houses[newIndex].price - 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }

        }
    } 
