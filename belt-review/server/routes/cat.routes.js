const express = require('express');

const {
    createCat,
    getAllCats,
    getCatById,
    deleteCatById,
    updateCatById
} = require('../controllers/cat.controller');

const router = express.Router()

router.post('/', createCat);
router.get('/', getAllCats);
router.get('/:id', getCatById);
router.delete('/:id', deleteCatById);
router.put('/:id', updateCatById);

module.exports = { catRouter: router }