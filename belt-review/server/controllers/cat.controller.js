const { Cat } = require('../models/cat.model');

const getAllCats = async (req, res) => {
    const cats = await Cat.find();
    return res.json(cats);
}

const getCatById = async (req, res) => {
    const cat = await Cat.findById(req.params.id)
    return res.json(cat);
}

const createCat = async (req, res) => {
    try {
        const cat = await Cat.create(req.body);
        return res.json(cat);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const deleteCatById = async (req, res) => {
    try {
        const deletedCat = await Cat.findByIdAndDelete(req.params.id)
        return res.json(deletedCat);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const updateCatById = async (req, res) => {
    try {
        const updatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
            // re-run our validaitons
            runValidators: true,
        })
        return res.json(updatedCat);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = {
    createCat,
    getAllCats,
    getCatById,
    deleteCatById,
    updateCatById
}