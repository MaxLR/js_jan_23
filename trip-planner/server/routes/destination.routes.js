const express = require('express');

const {
    handleCreateDestination,
} = require('../controllers/destination.controller');

const router = express.Router()

router.post('/', handleCreateDestination);

module.exports = { destinationRouter: router }