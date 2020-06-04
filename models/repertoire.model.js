const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seatSchema = new Schema({
    row: String,
    seat: String,
    taken: Boolean
});

const screeningSchema = new Schema({ 
    hall: String,
    time: String,
    seats: [seatSchema]
});

const moviesSchema = new Schema({ 
    title: String, 
    imdb_id: String, 
    screening: [screeningSchema] 
});


const repertoireSchema = new Schema({
    day: String,
    movies: [moviesSchema]
});

const Repertoire = mongoose.model('Repertoire', repertoireSchema, 'repertoire');

module.exports = Repertoire;