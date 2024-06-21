import React,{useEffect,useState}from 'react';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({match}) => {
const [dentist,setDentist]= useState(null);
const {id}= match.params;
 
 useEffect(()=>{
  const fetchDentistDetails= async()=>{ 
    try {
      const response= await axios.get('https://jsonplaceholder.typicode.com/users/${id}') ;
        
        setDentist(response.data);}
    catch(error){
      console.error('Error dentist details:',error);
    }
  };
  fetchDentistDetails();
} , [id]);
if(!dentist){
  return <p> Cargando...</p>;}

  return (
    <div className='contenedor-detalle'>
    <h1>{dentist.name}</h1>
    <p>Specialty:{dentist.specialty}</p>
    <p>Email:{dentist.email}</p>
    <p>Phone:{dentist.phone}</p>
    <p>Website{dentist.website}</p>
    </div>
  );
};

export default Detail;