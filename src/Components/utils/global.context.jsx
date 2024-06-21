import React,{ createContext,useEffect,useReducer} from 'react';



export const initialState = {theme: 'light', 
  data: [],favorites: []
  };

const reducer=(state,action)=>{ 
  switch(action.type)
  { case 'TOGGLE_THEME': 
    return { ...state,theme: state.theme === 'light' ? 'dark':'light'};
case 'SET_DATA': return { ...state, data:action.payload};
case 'ADD_FAVORITE': return { ...state, favorites:[...state,favorites,action.payload]};
case 'REMOVE_FAVORITE': return { 
  ...state,favorites:state.favorites.filter(item=> item.id !== action.payload.id)};
default: return state;}
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
