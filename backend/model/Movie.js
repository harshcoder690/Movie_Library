const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    Title: {
        type: String,
    },
    Year: {
        type: String,
    },
    imdbID: {
        type: String,
    },
    Type: {
        type: String,
    },
    Poster: {
        type: String,
    },
})

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie;