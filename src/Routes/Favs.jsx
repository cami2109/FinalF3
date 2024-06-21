import React,{useContext} from 'react';
import Card from "../Components/Card";
import { ContextGlobal} from "../Components/utils/global.context";
import 'FinalF3\src\index.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext(ContextGlobal);
  const {favorites} = state;

  return (
    <>
      <div className={'favs $ {state.theme}'}>
      <h1>Dentistas favoritos</h1>
      <div className='card-container'>
      {favorites.map((dentist)=>(
        <Card key={dentist.id} dentist={dentist}/>
      ))}
     </div>
      </div>
    </>
  );
};

export default Favs;
