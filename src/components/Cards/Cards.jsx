
import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
   return (
      <div className = {styles.cards}>
         {
         characters.map((item) => { //aca tambien lo podria desestructurar pero esta ves lo dejamos asi
            return ( <Card
               key={item.id}
               id={item.id}
               name={item.name}
               species={item.species}
               gender={item.gender}
               image={item.image}
               onClose={onClose}
            />)
         })}
      </div>);
}
