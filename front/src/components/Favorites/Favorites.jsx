import React, { useEffect } from "react";
import Card from "../Card/Card";
import './favorites.css'
import { useDispatch, useSelector } from "react-redux";
import { orderCards,filterCards, getFavorites } from "../../redux/actions";

//! HACER QUE BUSQUE LOS DATOS DEL SERVIDOR Y los ponga en el ESTADO GLOBAL.
//! VER CLASE DE M2 READ REDUX COMO SE LLAMABA LAS ACCIOS DEL COMONENTE DE FUNCION

const Favorites = () => {

  const myFavorites = useSelector((state) => state.myFavorites)
  console.log(myFavorites);
  const dispatch = useDispatch();

    function handleFilterChange(event) {
      dispatch(filterCards(event.target.value));
    }
    
    function handleOrderChange(event) {
      dispatch(orderCards(event.target.value));
    }


    return (
      <div className="favs">
        <h1>Favoritos</h1>
        <div>
          <select name = "ordena" onChange={handleOrderChange}>
            <option value = "Ascendente">Ascendente</option>
            <option value = "Descendente">Descendente</option>
          </select>
          <select name = "filtrar" onChange={handleFilterChange}>
            <option value = "todos">All</option>
            <option value = "Male">Male</option>
            <option value = "Female">Female</option>
            <option value = "Genderless">Genderless</option>
            <option value = "unknown">unknown</option>
          </select>
        </div>
        <div className="cardfavs">
          {myFavorites.map((char) => {
            console.log(char);
            return( <Card 
                        id={char.id} 
                        name={char.name} 
                        key={char.id} 
                        species={char.species} 
                        gender={char.gender} 
                        image={char.image} />);
          })}
        </div>
      </div>
    );
  }



export default Favorites;
