const products = require('../products.json')


const getProducts = (req, res) => {
    const item = products.find((val) => val.id === parseInt (rew.params.id))
    if (!item){
    return res.status(500).send('Item not on list')
    }
    res.status(500).send(item)
}


module.exports = getProducts