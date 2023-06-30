import axios from 'axios';
import { useReducer } from 'react';
import { createContext, useContext, useEffect } from 'react';

const TarjetaStates = createContext();

const InitialTarjetaState = {
  TarjetaList: [],
  Tarjeta: {},
};

const TarjetaReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { TarjetaList: action.payload, Tarjeta: state.Tarjeta };
    case 'GET_Tarjeta':
      return { TarjetaList: state.TarjetaList, Tarjeta: action.payload };
    default:
      throw new Error();
  }
};

const FetchContext = ({ children }) => {
  const [TarjetaState, TarjetaDispatch] = useReducer(TarjetaReducer, InitialTarjetaState);
  const urlList = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(urlList)
      .then((res) => TarjetaDispatch({ type: 'GET_LIST', payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TarjetaStates.Provider
      value={{
        TarjetaState,
        TarjetaDispatch,
      }}
    >
      {children}
    </TarjetaStates.Provider>
  );
};
export default FetchContext;

export const useTarjetaStates = () => useContext(TarjetaStates);
