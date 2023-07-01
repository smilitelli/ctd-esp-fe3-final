import axios from "axios";
import { createContext, useReducer, useEffect, useContext } from "react";


export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext();

  const initialDentistState ={ dentistList:[], dentist:{}, favs: JSON.parse(localStorage.getItem('favs')) ||  [] }

  const dentistReducer = (state,action) =>{
    switch(action.type){
      case'GET_LIST':
        return{ ...state, dentistList: action.payload}
      case'GET_DENT':
        return {...state, dentist: action.payload}
      case'ADD_FAV':
        return {...state, favs: [...state.favs, action.payload]}
      case'DELETE_FAV':
        return {...state, favs: action.payload}
      default:
        throw new Error('No existe el tipo de accion')
    }
  }

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialDentistState)

  const url ='https://jsonplaceholder.typicode.com/users'

    useEffect(()=>{
      axios(url)
      .then(res=>dentistDispatch({type:'GET_LIST', payload: res.data})) 
      .catch(err=>console.log(err))
    },[])


    useEffect(()=>{
      localStorage.setItem('favs',JSON.stringify(dentistState.favs))
    },[dentistState.favs])

  return (
    <ContextGlobal.Provider value={{}}>
      <dentistState.Provider value={{dentistState, dentistDispatch}} >
      {children}
      </dentistState.Provider>
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;
export const useDentistStates =() => useContext(ContextGlobal)