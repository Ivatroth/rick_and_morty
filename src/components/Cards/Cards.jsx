
import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className = {styles.cards}>
         {characters.map((item) => { //aca tambien lo podria desestructurar pero esta ves lo dejamos asi
            return  <Card
               name={item.name}
               species={item.species}
               gender={item.gender}
               image={item.image}
               onClose={() => window.alert("Emulamos que se cierra la card")}
            />
         })}
      </div>);
}
