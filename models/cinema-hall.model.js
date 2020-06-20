const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rowSchema = new Schema({
  row: String,
  seat: Number,
  isTaken: Boolean,
});

const cinemaHallSchema = new Schema({
  name: String,
  rows: [[rowSchema]],
});

const CinemaHall = mongoose.model("CinemaHall", cinemaHallSchema, "halls");

module.exports = CinemaHall;
