const User = require("../DB_connection");

const postUser = async (req, res)=>{
    try {
        const {email, passwword} = req.body;
        if(!email || email.length === 0 || !passwword || passwword.length === 0)
             //throw Error("Faltan datos")
             res.status(400).json({error: "Faltan datos"})
        else {
            const [newUser, created] = await User.findOrCreate({where: {email, passwword}});
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(500).json({error: message})
    }
   

}

module.exports = postUser;