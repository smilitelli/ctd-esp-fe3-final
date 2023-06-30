import React, { useState } from 'react'; 

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const [user, setUser] = useState({name: '', email: ''})  
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) =>{
        event.preventDefault()
        if(user.name.trim().length > 5 && user.email.length > 5){
            setError(false)
            setShow(true)}
        else{
            setError(true)
            }
  } 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="infoLabel">Name:</label>
        <input name="name" type="text" placeholder="Enter your name" onChange={handleChange}/>
        <label className="infoLabel">Email:</label>
        <input name="email" type="email" placeholder="Enter your email" onChange={handleChange}/>
        <button className="button-send">Send</button>
        {error && <p className="resp">Por favor verifique su información nuevamente</p>}  
      </form>
       {show ? <p className="resp">Gracias {user.name}, te contactaremos cuanto antes vía mail</p> : null}
    </div>
  );
};

export default Form;
