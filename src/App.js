import './App.css'
import { useState } from 'react'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'


function App () {

  const[characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function onClose(character){

  
 }
 
  return (
     <div className='App' style={{ padding: '25px' }}> 
        <Nav onSearch ={ onSearch }/>
      <hr />
      <div>
        <Cards personajes={characters}
        />
      </div>
      <hr />

    </div>
  )
}

export default App
