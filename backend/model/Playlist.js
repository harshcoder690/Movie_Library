const mongoose = require('mongoose')
const MovieSchema = require("../model/Movie").schema
const playListSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    movies: [MovieSchema]
})

const Playlist = mongoose.model('playlist', playListSchema)
module.exports = Playlist