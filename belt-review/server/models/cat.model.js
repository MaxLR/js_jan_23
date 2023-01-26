const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
        description: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [8, '{PATH} must be at least {MINLENGTH} characters.']
        },
        imgUrl: {
            type: String,
        },
        price: {
            type: Number,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
        attitude: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters.']
        },
    },
    { timestamps: true }
);

const Cat = mongoose.model('Cat', CatSchema);

module.exports = { Cat };