const express = require("express");
const router = new express.Router();
const { protect } = require('../middleware/protect');
const Playlist = require("../model/Playlist");
const PublicPlaylist = require("../model/PublicPlaylist");
const User = require("../model/user");

require("dotenv").config();
//done
router.post("/addToPrivate/:userId", protect, async(req, res) => {
        let uid = req.params.userId;
        let movie = req.body;
        try {
            let user = await User.findOne({ uid });
            if (!user) {
                let movies = [];
                movies.push(movie);
                let playlists = [];
                playlists.push(new Playlist({ name: "private", movies: movies }))
                let user = new User({ uid: uid, playLists: playlists })
                await user.save();
                res.status(200);
            } else {
                user.playLists[0].movies.push(movie);
                await user.save();
                res.status(200).send(user);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    })
    //done
router.post("/addToPublic/:userId", protect, async(req, res) => {
    var uid = req.params.userId;
    var movie = req.body;
    try {
        let playlist = await PublicPlaylist.findOne({ name: "public" });
        if (!playlist) {
            let movies = [];
            movies.push(movie);
            let playlist = new PublicPlaylist({ name: "public", movies: movies });
            await playlist.save();
            res.status(200);
        } else {
            playlist.movies.push(movie);
            await playlist.save();
            res.status(200);
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/addToPublic/:userId", protect, async(req, res) => {
    var uid = req.params.userId;
    var movie = req.body;
    try {
        let playlist = await PublicPlaylist.findOne({ name: "public" });
        if (!playlist) {
            let movies = [];
            movies.push(movie);
            let playlist = new PublicPlaylist({ name: "public", movies: movies });
            await playlist.save();
            res.status(200);
        } else {
            playlist.movies.push(movie);
            await playlist.save();
            res.status(200);
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/addToPublic/:userId", protect, async(req, res) => {
        var uid = req.params.userId;
        var movie = req.body;
        try {
            let playlist = await PublicPlaylist.findOne({ name: "public" });
            if (!playlist) {
                let movies = [];
                movies.push(movie);
                let playlist = new PublicPlaylist({ name: "public", movies: movies });
                await playlist.save();
                res.status(200);
            } else {
                playlist.movies.push(movie);
                await playlist.save();
                res.status(200);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    })
    //done
router.get("/getPublicList", protect, async(req, res) => {
        var uid = req.params.userId;
        var movie = req.body;
        try {
            let playlist = await PublicPlaylist.findOne({ name: "public" });

            if (!playlist) {
                res.status(400).send("No List Available")
            } else {
                res.status(200).send(playlist.movies);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    })
    //done
router.get("/getPrivateList/:userId", protect, async(req, res) => {
    var uid = req.params.userId;
    try {
        let user = await User.findOne({ uid });

        if (!user) {
            res.status(400).send("No List Available")
        } else {
            res.status(200).send(user.playLists[0].movies);
        }
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;