const router = require('express').Router();
let Booking = require('../models/booking.model');

router.route('/').post((req, res) => {

    console.log(req.body.tickets, 'req.body.tickets');
    const newBooking = new Booking({
        screeningId: req.body.screeningId,
        name: req.body.name,
        email: req.body.email,
        tickets: req.body.tickets
    });

    newBooking.save()
    .then((response) => {
        res.json(response);
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;