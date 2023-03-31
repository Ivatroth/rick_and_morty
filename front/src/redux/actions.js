import axios from "axios";

export const MY_FAVORITE = "MY_FAVORITE"; 
export const REMOVE_PERSONAJE = "REMOVE_PERSONAJE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//export const GET_FAVORITES = "GET_FAVORITES";




export const addFavorite = (personaje) =>{
  
  const URL_BASE = "http://localhost:3001";
  
  axios(`${URL_BASE}/rickandmorty/fav`, personaje)
    .then((response) => console.log(response.data));
  
  return {type: MY_FAVORITE, payload: personaje};
  }

  
export const deleteFavorite = (id) => {
  return { type: REMOVE_PERSONAJE, payload: id };
};

export const filterCards = (gender) => {
  return {type: FILTER, payload: gender}
};

export const orderCards = (id) => {
  return {type: ORDER, payload: id}
};


// export const getFavorites = () => {
//   return async function(dispatch){
//     const URL_BASE = "http://localhost:3001";
//     const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
//     dispatch({type: GET_FAVORITES, payload: response.date})
//   }
// }
  

