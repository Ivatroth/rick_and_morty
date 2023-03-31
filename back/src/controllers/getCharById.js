const axios = require ("axios")
const URL_BASE = "https://be-a-rym.up.railway.app/api";
const API_KEY = "477142636af7.4a5cc39cc5e9bad625db";
//* const {KEY, URL} = processs.env => env esta en el objeto process


//! con espress y promesas
// const getCharById =  (req,res) => { 

//         console.log("Entro en el getCharById");
//         const {id} = req.params;
        
//         axios.get(`${URL_BASE}/character/${id}?key=${API_KEY}`)
//              .then((response) => {
//                 const { image, name,gender,species} = response.data
//                 res.status(200).json({id,image,name,gender,species});
//              }) 
//             .catch(error => {
//                 res.status(500).json({ error: error.message });
//             })   
    
// }

//! Con async
const getCharById = async (req,res) => { 
    try {
       
        const {id} = req.params;
        //* al hacer await axios... lo que me devueve es una promesa
        const charById = await axios.get(`${URL_BASE}/character/${id}?key=${API_KEY}`);
        // .then((response) => successH(response,res)) //sacamos las funciones a fuera
        // .catch(error => errorH(error,res))   
        const { image, name, gender,species} = charById.data;
        res.status(200).json({id,image,name,gender,species});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

module.exports = getCharById;

//! Todo esto de abajo es antes de express, queda de recuerdo
// //* VARIABLES DE ENTORNO
// //*  VARIABLES PRIVADAAS. Le pertenecen al proyecto 
// //* se configuran por fura del codigo de la app, se configuran en el entorno
// //* se cra un archivo .env y contiene esas variables
// //* para usarlas drvemos intalar npm i dotenv . es una libreria
// //* y luego las importo
// //* require("dotenv").config(); en el atchivo del servidor
// //* poner en el gitegnor el .env si es que no esta
// //* se hace otro archivo .env.example donde explico que variables de 
// //* entorno hay y para que sirven
// //! en el proyecto individual hay que usar Variables de entorno



// //! esta es la success Handlers  del axios de abajo
// const successH = (response, res) => {
//     const {id, image,name,gender,species} = response.data;
//     res.writeHead(200,{"Content-Type": "application/json"})
//     res.end(JSON.stringify({id,image,name,gender,species}))
// }
// //! esta es la error Handlers  del axios de abajo
// const errorH = (error, res => {
//     res.writeHead(500, {"Content-Type": "text/plain"})
//     res.end(error.message)
// })

// const getCharById = (res, ID) => {
//     axios
//         .get(`${URL_BASE}/character/${ID}?key=${API_KEY}`)
//         .then((response) => successH(response,res)) //sacamos las funciones a fuera
//         .catch(error => errorH(error,res))     
// }

