const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rowSchema = new Schema({ 
    row: String, 
    seat: Number, 
    isTaken: Boolean
});

const screeningSchema = new Schema({
    title: String,
    date: String,
    time: String,
    hall: String,
    rows: [[rowSchema]]
});

const Screening = mongoose.model('Screening', screeningSchema, 'screening');

module.exports = Screening;