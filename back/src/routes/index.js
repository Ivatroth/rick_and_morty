const {Router} = require("express");
let favs = require("../utils/favs")
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

const router = Router();


router.get("/onsearch/:id", getCharById); 
router.get("/detail/:id", getCharDetail);

router.post("/rickandmorty/fav", (req, res)=>{
    try {
        favs.push(req.body);
        res.status(200).json({status: "ok"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }


})

router.get("/rickandmorty/fav", (req,res)=>{
    res.status(200).json(favs);
})

router.delete("/rickandmorty/fav/:id", (req,res)=>{
    const {id} = req.params;
    favs = favs.filter((fav) => fav.id !== Number(id));
    res.status(200).json({status: "ok"});
})

module.exports = router;