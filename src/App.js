import './App.css'
import { useState } from 'react' // esto se llama Hooks de react
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'


function App () {

   // Creando un Estado de App
  const[characters, setCharacters] = useState([]); 
  //useState es una funcion que me debuelve un  array con 2 cosas: un estado  y una funcion que modifica el estado

  function onSearch(id) {

   const URL_BASE = "https://be-a-rym.up.railway.app/api";
   const API_KEY = "477142636af7.4a5cc39cc5e9bad625db";
   //https://be-a-rym.up.railway.app/api/character/${character}?key=477142636af7.4a5cc39cc5e9bad625db
   //
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
       .then((response) => response.json()) //response
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
            //aca le pasa una callback que recibe el estado viejo y retorna el estado nuevo
             setCharacters((oldChars) => [...oldChars, data]); 
             //setCharacters([...characters, data]) seria lo mismo
          } else {
             window.alert('No hay personajes con ese ID, o, ya se encuentra');
          }
       });
 }

 const onClose = (id) => {

   //filter no modifica el arra original, me debuelve un arr nuevo.
   setCharacters(characters.filter((character) => character.id !== id))
  
 }
 
  return (
      <div className='App' style={{ padding: '25px' }}> 
        
      <Nav onSearch ={ onSearch }/>

      <hr />
      <div>
        <Cards 
         characters={characters}
         onClose = {onClose}
        />
      </div>
      <hr />

    </div>
  )
}

export default App
