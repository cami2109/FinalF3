import React,{ createContext,useEffect,useReducer} from 'react';

export const GlobalContext= createContext();

export const initialState = {
  theme: 'light', 
  favorites: [],
  dentist: []
  };

const ACTIONS = {
    TOGGLE_THEME: (state) => 
      ({ ...state, theme: state.theme === 'light' ? 
        'dark' : 'light' }),
    SET_DATA: (state,action) => 
      ({ ...state, dentist: action.payload }),

    ADD_FAVORITE: (state,action) => ({ ...state, favorites: [...state.favorites,action.payload]}),
    REMOVE_FAVORITE: (state,action) => ({
        ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload.id)
      })};

      const  reducer=(state,action) =>{
        const actionHandler= ACTIONS[action.type];
        return actionHandler ? actionHandler (state,action):state;
      };

      export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const[state,dispatch]=useReducer(reducer,initialState);
  
  const toggle_theme= () => { dispatch ({ type:'TOGGLE_THEME' });};
  const setData= (data) =>{ dispatch ({ type:'SET_DATA',payload:data});};
  const addFavorite= (dentist) =>{ dispatch ({ type:'ADD_FAVORITE',payload:dentist});};
  const  removeFavorite= (dentist) =>{ dispatch ({ type:'REMOVE_FAVORITE',payload:dentist});};
  

  useEffect(()=>{
    const fetchData= async()=>{ 
      try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
          ;
          const data = await response.json();
          setData(data);
      }
      catch(error){
        console.error('Error data:',error);
      }
    };
    fetchData();
  } , []);

  return (
    <ContextGlobal.Provider 
      value={{state,toggle_theme,setData,addFavorite,removeFavorite
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
