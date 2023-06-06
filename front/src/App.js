import './App.css'
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from 'react' // esto se llama Hooks de react
import {Route, Routes} from "react-router-dom"
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from "./components/Form/Form.jsx"
import Favorites from "./components/Favorites/Favorites"
import { useNavigate, useLocation } from 'react-router-dom'



function App () { 

   // Creando un Estado de App
   const[characters, setCharacters] = useState([]); 
   const {pathname} = useLocation(); //pathname es una propiedad de Location que es un objeto
   //useState es una funcion que me debuelve un  array con 2 cosas: un estado  y una funcion que modifica el estado
   const[access, setAccess] = useState(false); 
   const navigate = useNavigate();

   //Esto no nos dejará navegar por la aplicación, al menos que ingresemos la información correcta!
   useEffect(() => {
   !access && navigate('/');
   }, [access]);

  const usename = 'email-prueba@gmail.com'
  const password = '1234imf'

  function onSearch(id) {

   //API de JORGE
   // const URL_BASE = "https://be-a-rym.up.railway.app/api";
   const URL_BASE = "https://rickandmortyapi.com/api/character/";
   
   //const API_KEY = "477142636af7.4a5cc39cc5e9bad625db";

   //const URL_BASE ="http://localhost:3001"; //rickandmorty"

   // Busca primero en el estado global si ya esta el personaje   
   if(characters.find((char) => char.id === id)){
      return alert("Personaje repetido")
   }
   //si no lo encuentra lo busca en la Api
   ////fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
   fetch(`${URL_BASE}/${id}`)
       .then((response) => response.json()) 
       .then((data) => {
          if (data.name) {
            //aca le pasa una callback que recibe el estado viejo y retorna el estado nuevo
             setCharacters((oldChars) => [...oldChars, data]); 
             //setCharacters([...characters, data]) seria lo mismo
          } else {
             window.alert('No hay personajes con ese ID');
          }
          
       });

       
   };

 const onClose = (id) => {

   //filter no modifica el array original, me debuelve un arr nuevo.
   setCharacters(characters.filter((char) => char.id !== id));
   
 };

    //esto es para comparar el usename y password
    function login(userData){
      if(userData.username === usename && userData.password === password){
         setAccess(true);
         alert('Logeado con exito')
         navigate("/home");
      }
      else alert('incorrecto')
   }
    //PARA DESLOGEAR PONER access en false
 
  return (
      <div className='App' style={{ padding: '25px' }}> 

         {pathname !== "/" && <Nav onSearch ={onSearch}></Nav>}
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/" element={<Form login={login} />} />
            <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
         </Routes>
      </div>
  );
}

export default App;


