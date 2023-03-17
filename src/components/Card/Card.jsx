import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Card(props) { //podemos pasar props y abajo usar props.name y etc., pero es mejor desestructurar
   const { id, name, species, gender, image, onClose, myFavorites, addFavorite,deleteFavorite } = props
   const [isFav,setIsFav] = useState(false);

  
   function handleFavorite(){
      if(isFav) {
         setIsFav(false)
         deleteFavorite(id);
      }else {
         setIsFav(true);
         addFavorite({ id, name, species, gender, image, onClose});
      }
    }
   
    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
  
      <div className={styles.card}>

         <div className={styles.divimage}>
            {isFav 
                  ? <button onClick={handleFavorite}>❤️</button>
                  : <button onClick={handleFavorite}>🤍</button> 
            }
            <img  src={image} alt="imagen" className={styles.image}/>
         </div>
                 
         <div className={styles.info}>
         <Link to={`/detail/${id}`} >
            <h1 className={styles.title}>{name}</h1>
         </Link>
            <h2 className={styles.subtitle}>{species}</h2>
            <h2 className={styles.subtitle}>{gender}</h2>
            <button onClick={() => {onClose(id)}} className={styles.button}> X </button>
            
         </div>
      </div>
   );
}

const mapDispatchProps = (dispatch) => {
   return{
      addFavorite:(personaje)=>{dispatch(addFavorite(personaje))},
      deleteFavorite:(id) => {dispatch(deleteFavorite(id))}
   };
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchProps)(Card);