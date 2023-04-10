

const axios = require ("axios")

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const API_KEY = "477142636af7.4a5cc39cc5e9bad625db";

//! con espress y promesas
// const getCharDetail =  (req,res) => { 

//     console.log("Entro en el getCharDetail");
//     const {id} = req.params;
    
//     axios.get(`${URL_BASE}/character/${id}?key=${API_KEY}`)
//          .then((response) => {
//             const { image, name,gender,species,origin} = response.data
//             res.status(200).json({id,image,name,gender,species,origin});
//          }) 
//         .catch(error => {
//             res.status(500).json({ error: error.message });
//         })   

// }
// //! esta es la success Handlers  del axios de abajo
// const successH = (response, res) => {
//     const {image,name,gender,species,origin} = response.data;
//     res.status(200).json({image,name,gender,species,origin})
// }
// //! esta es la error Handlers  del axios de abajo
// const errorH = (error, res => {
//     res.status(500).json({error: error.message})
// })

//!con async
const getCharDetail = async (req, res) => {
        console.log("Entro a getCharDetail");
        const {id} = req.params;
        console.log(id);
        try {
                const {id} = req.params;
                console.log(id);
                const response = await axios.get(`${URL_BASE}/character/${id}?key=${API_KEY}`)
                //.then((response) => successH(response,res)) //sacamos las funciones a fuera
                //.catch((error) => errorH(error,res))    

                const {image,name,gender,species,origin} = response.data;

                res.status(200).json({image,name,gender,species,origin})
        
            } catch (error) {
                    res.status(503).json({error: error.message})
            }
            
}
            
module.exports = getCharDetail;



            