import React,{useContext,useEffect} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state,setData}= useContext(ContextGlobal);
  useEffect(() => {
    const fetchData = async () => {
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
  } , [setData]);

  return (
    <div>
      <h1>Lista de dentistas</h1>
      <div>
      { state.dentist && state.dentist.map (dentist =>(
        <div
        key={dentist.id}
        className='grid-item'>
          <Card dentist={dentist} />
        <Link to={`/dentist/${dentist.id}`}>Ver detalle</Link> 
        </div>
        ))}
      </div>
    </div>
  );
};

export default Home;