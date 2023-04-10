const Favorite = require("../DB_connection");

const deleteFav = (req, res) => {
    try {
        const id = req.params;
        const favDelete = Favorite.findByPk(id)
        favDelete.destroy()
        const favs = Favorite.findAll();
        res.status(200).json(favs)
    } catch (error) {
        res.status(500).json({error: message});
    }
}

module.exports = deleteFav;