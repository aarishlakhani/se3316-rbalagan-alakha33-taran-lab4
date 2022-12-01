const express = require("express");
const router = express.Router();
const { playlists } = require("../models");


router.get('/', async (req, res)=> {

    const listOfPlaylists = await playlists.findAll();
    res.json(listOfPlaylists);

});

router.post('/',async (req,res)=> {
    const play = req.body;
    await playlists.create(play);
    res.json(play);
});


router.get('/recentPlaylists',(req,res) => {
    db.query('SELECT * FROM playlists ORDER BY updatedAt DESC LIMIT 10', (err, data) => {
        console.log(data);
        if(err != null){
           res.json(err)
        }
        else{
            res.json(data)
        }})
    }

);

module.exports = router;