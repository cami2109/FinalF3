import React, { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Home = () => {
  const { state, setData } = useContext(ContextGlobal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setData({ ...state, dentist: data }); 
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    if (!state.dentist) { 
      fetchData();
    }
  }, [state, setData]);

  return (
    <div className={state.theme}>
      <h1>Lista de dentistas</h1>
      <div className="grid-container">
        {state.dentist && state.dentist.map(dentist => (
          <div key={dentist.id} className='grid-item'>
            <Card dentist={dentist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;