
import Card from "../Card/Card";
import styles from "./Cards.module.css"

// //***** */
// import { useDispatch } from "react-redux";
// import { getFavorites } from "../../redux/actions";
// import { useEffect } from "react";
// //***** */

export default function Cards({ characters, onClose }) {

   // //***** */
   // const dispatch = useDispatch();
   // useEffect(() => {
   //   dispatch(getFavorites());
   // }, []);
   // //***** */

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
