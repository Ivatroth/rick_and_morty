
import styles from "./Card.module.css"
import { useState } from "react";

export default function Card({id, name, species, gender, image, onClose}) { //podemos pasar props y abajo usar props.name y ext, pero es mejor desestructurar
   
   //  const [id, setId] = useState("");

   // const handleChange = (event) => {
   //    setId(event.target.value);
   // }
   
   return (
      <div className={styles.card}>

         <div className={styles.divimage}>
            <img  src={image} alt="imagen" className={styles.image}/>
         </div>
                 
         <div className={styles.info}>
            <h1 className={styles.title}>{name}</h1>
            <h2 className={styles.subtitle}>{species}</h2>
            <h2 className={styles.subtitle}>{gender}</h2>
            <button onClick={() => {onClose(id)}} className={styles.button}> X </button>
            
         </div>
      </div>
   );
}
