const router = require('express').Router();
let Repertoire = require('../models/repertoire.model');
const axios = require('axios');


router.route('/:day').get((req, res) => {
    console.log('req.params.day', req.params.day);

    Repertoire.findOne({ day: req.params.day })
    .then(async data => {    
        let moviesDetails = await Promise.all(data.movies.map(async movie => {
            let res;
            try {
              res = await axios.get(`${process.env.API_URL}/${movie.imdb_id}?api_key=${process.env.API_KEY}`);
            } catch (err) {
              console.log(err);
            }

            //console.log(res, 'res');
            const data = res.data;
            const movieDetail = {
                title: data.title,
                year: data.release_date.substring(0, 4),
                countries: data.production_countries.map(genre => genre.name),
                genre: data.genres.map(genre => genre.name),
                runtime: data.runtime,
                description: data.overview,
                poster: `${process.env.POSTER_URL}/${data.poster_path}`,
                screening: movie.screening
            };
            return movieDetail;
          }))

       
          res.json(moviesDetails); 
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;