import React,{useContext} from "react";
import { Link} from "react-router-dom";
import { ContextGlobal } from "./utils/global.context"; 
import 'FinalF3\src\index.css';


const Card = ({ dentist }) => {

  const {state,addFavorite,removeFavorite} = useContext(ContextGlobal);
  const {favorites} = state;
  const isFavorite=favorites.some(item=>item.id=== dentist.id);
  const toggleFavorite = () => {
    if(isFavorite){
      removeFavorite(dentist);
    }else{
      addFavorite(dentist);
    } };

  return (
    <div className="card">
      <h2>{dentist.name}</h2>
      <p>{dentist.specialty}</p>
    
        <button onClick={toggleFavorite}>{isFavorite ? 'removeFavorite':'Add to favorites'}
        </button>
       
    </div>
  );
};

export default Card;
