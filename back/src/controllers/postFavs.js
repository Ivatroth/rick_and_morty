const Favorite = require("../DB_connection");;

const postFav = async (req, res) => {
    try {
        const {name, origin, status, image, species, gender} = req.body;
        if(![name, origin, status, image, species, gender].every(Boolean))
            res.status(401).json({error: "Faltan datos"});
        else {
            await Favorite.create({name, origin, status, image, species, gender});
            const favs = await Favorite.findAll();
            res.status(200).json(favs)
        } 
    } catch (error) {
        res.status(500).json({error: message})
    }

}

module.exports = postFav;