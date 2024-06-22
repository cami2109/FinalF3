import React,{useEffect,useState,useContext}from 'react';
import axios from 'axios';
import {useParams}from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const [dentistDetail,setDentistDetail]= useState(null);
const {id}= useParams();
const [loading,setLoading]= useState(true);
 
 useEffect(()=>{
  const fetchDentistDetails= async()=>{ 
    try {
      const response= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) ;
        
        setDentistDetail(response.data);
        setLoading(false);
      }
    catch(error){
      console.error('Error dentist details:',error);
    }
  };
  fetchDentistDetails();
} , [id]);

if(loading){
  return <div> Cargando...</div>;}

  return (
    <div>
    <h1>Detalles del Dentista</h1>
    <p>Nombre:{dentistDetail.name}</p>
    <p>Email:{dentistDetail.email}</p>
    <p>Phone:{dentistDetail.phone}</p>
    </div>
  );
};

export default Detail;