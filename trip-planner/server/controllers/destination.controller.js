const { Destination } = require('../models/destination.model');

const handleCreateDestination = (req, res) => {
    Destination.create(req.body)
        .then(data => { 
                console.log(data);
                return res.json(data)
            })
            .catch(err => { 
                console.log(err);
                return res.json(err) 
            })
}

module.exports = {
    handleCreateDestination
}