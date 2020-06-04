const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
    production: String,
    genre: String,
    runtime: Number,
    descrption: String,
    poster: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;