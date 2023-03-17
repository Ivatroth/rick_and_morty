export const MY_FAVORITE = "MY_FAVORITE"; 
export const REMOVE_PERSONAJE = "REMOVE_PERSONAJE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const addFavorite = (personaje) =>{
    return {type: MY_FAVORITE, payload: personaje}
};

export const deleteFavorite = (id) => {
  return { type: REMOVE_PERSONAJE, payload: id };
};

export const filterCards = (gender) => {
  return {type: FILTER, payload: gender}
};

export const orderCards = (id) => {
  return {type: ORDER, payload: id}
};


