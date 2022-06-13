const mongoose = require('mongoose')
const MovieSchema = require("../model/Movie").schema
const PublicPlaylistschema = new mongoose.Schema({
    name: {
        type: String,
    },
    movies: [MovieSchema],
})

const PublicPlaylist = mongoose.model('publicPlaylist', PublicPlaylistschema)
module.exports = PublicPlaylist