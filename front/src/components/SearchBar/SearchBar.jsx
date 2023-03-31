import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) { // desestructuro props

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value); //event.target es quien ejecuta, en este caso el input
   }

   return (
      <div className={styles.searchBar}>
         <input type='search' className={styles.input} onChange={handleChange}/>
         <button onClick={() => {onSearch(id)}} className={styles.button}>Agregar</button> 
      </div>
   );
}
