import React from "react";
import { routes } from "../Routes/routes";
import { Link } from "react-router-dom";
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';
import { useDentistState } from './utils/global.context'
import { dentistDispatch } from './utils/global.context'


const Card = ({ props }) => {

  const {name, username, id} = props;
  const { theme } = useThemeStates();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const findDentist = useDentistState.favs.find(dent=>dent.id === props.id)
    if(!findDentist){
    dentistDispatch({type:'ADD_FAV', payload: props})
  } else{
    alert('Already favorite')
  }
  }

  return (
    <Link style= {{background: theme.background, color: theme.font}} 
    className="card" to={`${routes.detail}${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="photo" src="./images/doctor.jpg" alt="dentist photo" style={{width: '200px'}}/>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <p>{id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button style= {{font: theme.background, color: theme.font}}
        onClick={addFav} className="favButton">Agregar ⭐</button>
    </Link>
  );
};

export default Card;
