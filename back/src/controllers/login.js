const User = require("../DB_connection");


const login = async(req, res)=>{
    try {
        const {email, password} = req.query;
        if(!email || email.length === 0 || !passwword || passwword.length === 0)
             //throw Error("Faltan datos")
             res.status(400).json({error: "Faltan datos"})
        else {
            const user = await User.findOne({where: {email: email}});
            if(!user) res.status(404).json({error: "Usuario no encontrado"})
            else if(!(user.password === password)) res.status(403).json({error: "Contraseña incorrecta"});
            else res.status(200).json({access: true})
        }
    } catch (error) {
        res.status(500).json({error: message})
    }
    

}

module.exports = login;