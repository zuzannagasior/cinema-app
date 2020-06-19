const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const screeningSchema = new Schema({
    hall: String,
    time: String
});

const moviesSchema = new Schema({ 
    _id: String,
    title: String, 
    imdb_id: String, 
    screening: [{screeningSchema}]
});


const repertoireSchema = new Schema({
    day: String,
    movies: [moviesSchema]
});

const Repertoire = mongoose.model('Repertoire', repertoireSchema, 'repertoire');

module.exports = Repertoire;