import React,{useContext} from "react";
import { ContextGlobal } from "./utils/global.context"; 


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
      <img src="\public\images\doctor.jpg" alt={dentist.name}/>
    
        <button onClick={toggleFavorite}>{isFavorite ? 'removeFavorite':'Add to favorites'}
        </button>
        <a href={`/dentist/${dentist.id}`}>  Detalle</a>
       
    </div>
  );
};

export default Card;
