import React,{useState} from "react";
import Contact from "../Routes/Contact";
import 'FinalF3\src\index.css';


const Form = ({handleSubmit}) => {
 const [name, setName] = useState (' ');
 const [email, setEmail] = useState (' ');
 const onSubmit = (e) => {e.preventDefault();
  handleSubmit({name,email});
 };

  return (
      <form onSubmit={onSubmit}>
      <div>
      <label htmlFor="name"> Name:
        </label> 
        <input type="text"
        id="name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        /> 
      </div>
      <div>
      <label htmlFor="email"> Email:
        </label> 
        <input type="email"
        id="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)} />

      </div>
      <button type="submit">Submit</button>
      </form>

  );
};

export default Form;
