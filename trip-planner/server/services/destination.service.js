const { Destination } = require('../models/destination.model');

const createDestination = async (data) => {
    const destination = await Destination.create(data);
    return destination
}

module.exports = {
    createDestination
};