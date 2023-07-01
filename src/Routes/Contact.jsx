import React from 'react';
import Form from '../Components/Form';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Contact = () => { 
  const {theme} = useThemeStates();
  
  
  return (
    <div style={{ background: theme.background, color: theme.font }} className="" >
      <h2 className="info">Want to know more?</h2>
      <p className="info">Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact;
