import {ORDER, FILTER, MY_FAVORITE, REMOVE_PERSONAJE } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case MY_FAVORITE:
        
        return { 
          ...state, 
          myFavorites: [...state.myFavorites, action.payload] ,
          allCharacters: [...state.allCharacters, action.payload] 
        };
  
      case REMOVE_PERSONAJE:
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            (char) => char.id !== action.payload
          ),          
          allCharacters: state.allCharacters.filter(
            (char) => char.id !== action.payload
          ),
        };
      
      case FILTER:
          let filtrar = []
          if(action.payload === 'todos') filtrar = state.allCharacters
          else filtrar = state.allCharacters.filter((char) => char.gender === action.payload)
          return {
            ...state,
            myFavorites: filtrar,
          }

      case  ORDER:
          const ordenado = state.allCharacters.sort((a, b) => a.id - b.id )      
          if(action.payload === "Ascendente") {
            return {
              ...state,
              myFavorites: ordenado
            };
          } else {

              return {
                ...state,
                myFavorites: ordenado.reverse()
            }  
         }  
          
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;