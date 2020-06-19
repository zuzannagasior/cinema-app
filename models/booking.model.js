const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    screeningId: String,
    name: String,
    email: String,
    tickets: [{
        row: String,
        seat: Number,
        ticketType: String,
        price: Number
    }]
});

const Booking = mongoose.model('Booking', bookingSchema, 'bookings');

module.exports = Booking;