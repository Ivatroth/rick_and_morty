const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=> {
    it("En el callback de este describe haremos el testing de todas nuestras rutas!"),()=>{
 
    describe('GET rickandmorty/{id}', ()=> {
        
        it("Responde con status: 200", () => {
            agent.get('/rickandmorty/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', ()=>{
            agent.get('/rickandmorty/1').expect(200)
            
            const {id, name, species, gender, image} = response.body;
            if(![id, name, species, gender, image].every(Boolean))
                //!ERROR, no se que hay que hacer aca
        })

        it('Si hay un error responde con status: 500', ()=>{
            agent.get('/rickandmorty/IDqueNoExiste').expect(500);
        })


    }) 
    }
})

//! Continuear despues, leer el readme de test del M3