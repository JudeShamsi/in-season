const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const foodItemSchema = new Schema({
    Type: String,

    Name: {
        type: String
    },

    January: {
        type: String
    },

    February: {
        type: String
    },

    March: {
        type: String
    },

    April: {
        type: String
    },

    May: {
        type: String
    },

    June: {
        type: String
    },

    July: {
        type: String
    },

    August: {
        type: String
    },

    September: {
        type: String
    },

    October: {
        type: String
    },

    November: {
        type: String
    },

    December: {
        type: String
    }
}); 

module.exports = foodItem = mongoose.model('foodItem', foodItemSchema, 'food-items');