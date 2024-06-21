import React,{useState} from 'react';
import Form from '../Components/Form'
import 'FinalF3\src\index.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => { 
  const [formData,setFormData]=
  useState ({name:' ',email:' ',message:' '});
  const [errors,setErrors]=
  useState ({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name)
      tempErrors.name = 'El nombre es requerido ';
    if (!formData.email){
      tempErrors.email = 'El email es requerido ';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)){ tempErrors.email ='El email es invalido ';} 
    if (!formData.message)
      tempErrors.message = 'El mensaje es requerido ';
    setErrors(tempErrors); 
    return Object.keys(tempErrors).length ===0;};

    const handleChange = (e) => {
      const {name,value} = e.target;
      setFormData({...formData,[name]:value});
    };
    const handleSubmit = (e) => { e.preventDefault(); if(validate()){
      console.log('Informacion enviada',formData);
    }};

  return (
    <div className='Contacto'>
      <h1>Contactanos</h1>
      <Form 
      onSubmit={handleSubmit}>
   <div>
   <label> Name: </label>
   <input type='text' name='name' value={formData.name} onChange={handleChange}/>
   {errors.name && <p className='error'> {errors.name} </p>}
    </div>
    <div>
  
  <label> Email: </label>
   <input type='email' name='email' value={formData.email} onChange={handleChange}/>
   {errors.email && <p className='error'> {errors.email} </p>}
    </div>
    <div>
    <label> Message: </label>
    <textarea  name='message' value={formData.message} onChange={handleChange}/>
    {errors.message && <p className='error'> {errors.message} </p>}
     </div>
    
    <button type='submit'>Enviar</button>
    </Form>
    </div>
);
};

export default Contact