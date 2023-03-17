import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const Detail = ()=>{

    const {detailId} = useParams(); //params me da un objeto que tiene los valores de lo que le pase en /:algo
    const [character, setCharacter] = useState({});


      useEffect(()=>{
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const API_KEY = "477142636af7.4a5cc39cc5e9bad625db";
        // Dejo axios que jorge mostro pero igual no lo comprendo tanto, ni axios ni fetch
        axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`).then((response) => setCharacter(response.data));
      }, []);

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