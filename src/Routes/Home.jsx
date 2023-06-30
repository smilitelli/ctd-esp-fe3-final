import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [cards, setCards] = useState([]) 
  
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
     axios(url)
     .then(response => setCards(response.data))
  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <ul>    
          {cards ?
            cards.map((props) => (
              <li key={props.id}>
                <Card props={props} />             
              </li>
)) : null}
            </ul>
      </div>
    </main>
  );
};

export default Home;