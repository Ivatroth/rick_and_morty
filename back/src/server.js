//* Algo que enseño Jorge pero tengo que investigar bien porque no mw quedo claro
//require("dotenv").config();
//const PORT = process.env.PORT || 3001

const express = require("express");
const router = require("./routes/index") 
const  cors  = require ('cors')
const morgan = require("morgan");
const PORT = 3001;

const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.use(cors());
server.use("/",router); 

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});



//! hay que instalar cors importarlo y poner server.use(cors())






//! Todo esto de abajo es antes de express, queda de recuerdo
// const http = require("http");
// // const characters = require("./utils/data")
// const getCharById = require("./controllers/getCharById")
// const getCharDetail = require("./controllers/getCharDetail");

// http.createServer((req, res) =>{
//      res.setHeader('Access-Control-Allow-Origin', '*');
//      const {url} = req;
//      console.log(url);

// //! esto de abajo fue el ejercicio de la clase de Node    
// //     if(url.includes('rickandmorty/character')){
// //         const id = url.split("/").pop();
// //         const pers = characters.find((item) => item.id == id);
// //         // const pers = characters.filter((item) => item.id == id)
// //         //* el filter me devuelve un arr con un onj, entonces voy a tener que usar "pers[0]"
// //         //* el find me debuelve el onjeto dentro del array, me conviene, de esa manera uso "pers" directamente
// //         //pregunto si hay pers
// //         if(pers){
// //             res.writeHead(200, {"Content-Type": "application/json"});
// //             return res.end(JSON.stringify(pers));
// //         }
// //         else {
// //             res.writeHead(404,{"Content-Type": "application/json"});
// //             return res.end(JSON.stringify({error: 'No hay personaje'}));
// //         }
        
// //     }
// //     res.writeHead(404);
// //     res.end();

// //! esto es el ejercicio de la clase Promises
   //      if(url.includes('onsearch')){
   //          console.log("Estoy");
   //          const id = url.split("/").pop(); //* otra forma => const id = url.split("/").at(-1)
   //          getCharById(res,id);
   //      }
   //      if(url.includes('detail')){
   //          const id = url.split("/").pop(); //* otra forma => const id = url.split("/").at(-1)
   //          getCharDetail(res,id);
   //      }

   //  }).listen(3001, "localhost");

