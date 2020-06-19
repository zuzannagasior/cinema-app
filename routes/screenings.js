const router = require('express').Router();
let Screening = require('../models/screening.model');
let Repertoire = require('../models/repertoire.model');

router.route('/:date/:title/:time').get((req, res) => {
    const date = req.params.date;
    const title = req.params.title;
    const time = req.params.time;
    console.log(date, 'date', title, 'title', time, 'time');

    Screening.findOne({date, title, time})
    .then(data => {    
        console.log(data, 'data');
        res.json(data);
        })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const screeningId = req.body.screeningId;

    if (screeningId) {

        Screening.findById(screeningId)
        .then(screening => 
            {
                const newRows = req.body.rows;
                screening.rows = newRows;
            
                screening.save()
                    .then(() => res.json('Screening updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
        .catch(err => res.status(400).json('Error: ' + err));

    } else {

        const newScreening = new Screening({
            title: req.body.title,
            date: req.body.date,
            time: req.body.time,
            hall: req.body.hall,
            rows: req.body.rows,
        });
    
        newScreening.save()
        .then(() => {
            res.json('Screening added!');
        })
        .catch(err => res.status(400).json('Error: ' + err));
    }
});

module.exports = router;