const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const moviesRouter = require('./routes/movies');
const repertoireRouter = require('./routes/repertoire');
const cinemaHallsRouter = require('./routes/cinema-halls');
const screeningsRouter = require('./routes/screenings');
//const bookingsRouter = require('./routes/bookings');
// const usersRouter = require('./routes/users');

app.use('/movies', moviesRouter);
app.use('/repertoire', repertoireRouter);
app.use('/halls', cinemaHallsRouter);
app.use('/screenings', screeningsRouter);
//app.use('/bookings', bookingsRouter);
// app.use('/users', usersRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})