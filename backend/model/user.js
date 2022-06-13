const mongoose = require('mongoose')
const playListSchema = require('./Playlist').schema;
const Userschema = new mongoose.Schema({
    uid: {
        type: String,
        unique: true
    },
    playLists: [playListSchema],
})

const User = mongoose.model('user', Userschema)
module.exports = User