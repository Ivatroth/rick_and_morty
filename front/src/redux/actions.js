import axios from "axios";

export const MY_FAVORITE = "MY_FAVORITE"; 
export const REMOVE_PERSONAJE = "REMOVE_PERSONAJE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
const URL_BASE = "http://localhost:3001";
export const GET_FAVORITES = "GET_FAVORITES";


export const addFavorite =  (personaje) =>{
  try {
    return async function (dispatch) {
      const response = await axios.post(`${URL_BASE}/rickandmorty/fav`, personaje);
      dispatch({type: MY_FAVORITE, payload: response.data});
     }
    
  } catch (error) {
    throw Error(error.message);
  }

    // axios.post(`${URL_BASE}/rickandmorty/fav`, personaje)
    //   .then((response) => console.log(response.data));
    // return {type: MY_FAVORITE, payload: personaje};

  }

  
export const deleteFavorite = (id) => {

  try {
    return async function(dispatch){
      const response = axios.delete(`${URL_BASE}/rickandmorty/fav/${id}`);
      dispatch({ type: REMOVE_PERSONAJE, payload: id });
    }
  } catch (error) {
    throw Error(error.message);
  }

  // axios.delete(`${URL_BASE}/rickandmorty/fav/${id}`)
  // .then((response) => console.log(response.data));
  // return { type: REMOVE_PERSONAJE, payload: id };
};

export const filterCards = (gender) => {
  return {type: FILTER, payload: gender}
};

export const orderCards = (id) => {
  return {type: ORDER, payload: id}
};


export const getFavorites = () => {
  try {
    return async function(dispatch){
      const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
      dispatch({type: GET_FAVORITES, payload: response.data})
    }
  } catch (error) {
    throw Error(error.message);
  }

}
  

