import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const Detail = ()=>{

    const {id} = useParams(); //params me da un objeto que tiene los valores de lo que le pase en /:algo
    const [character, setCharacter] = useState({});
    
    //console.log(id);
  
      useEffect(()=>{
        const URL_BASE = "http://localhost:3001";
        //const API_KEY = "477142636af7.4a5cc39cc5e9bad625db";
        
        axios(`${URL_BASE}/detail/${id}`).then((response) => {

          setCharacter(response.data)
        });
      }, []);
    console.log(character);
    return(
        <div className={styles.contenedor}>
          
          {character.name ? (
            <div className={styles.info}>
                <div>
                  <h1>Nombre: {character?.name}</h1>
                  <p>Status: {character.status}</p>
                  <p>Specie: {character.specie}</p>
                  <p>Gender: {character.gender}</p>
                  <p>Origin: {character.origin?.name}</p>
                </div>
                <img src={character.image}  alt="img"/>
            </div>

          ) : (
            <h3>Loading...</h3>
          )}

            <div className={styles.button}>
                <Link to = "/home"><button>Volver</button></Link>
            </div>
        </div>

    );
};

export default Detail;