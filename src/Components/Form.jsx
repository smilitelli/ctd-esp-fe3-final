import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label className="infoLabel">Name:</label>
        <input type="text" name="name" placeholder="Your name" />
        <label className="infoLabel">Email:</label>
        <input type="email" name="email" placeholder="Your email" />
        <button className="button-send">Send</button>
      </form>
    </div>
  );
};

export default Form;
