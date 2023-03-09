
import styles from "./Card.module.css"

export default function Card({name, species, gender, image, onClose}) { //podemos pasar props y abajo usar props.name y ext, pero es mejor desestructurar
   return (
      <div className={styles.card}>

         <div className={styles.divimage}>
            <img  src={image} alt="imagen" className={styles.image}/>
         </div>
                 
         <div className={styles.info}>
            <h1 className={styles.title}>{name}</h1>
            <h2 className={styles.subtitle}>{species}</h2>
            <h2 className={styles.subtitle}>{gender}</h2>
            <button onClick={onClose} className={styles.button}> X </button>
            
         </div>
      </div>
   );
}
