import React, {useState, useEffect} from 'react';
import './App.css';
import TarjetaPokemon from './components/TarjetaPokemon'

import './App.css';

const App= () => {

  const [page, setPage] = useState('Pikachu')
  const [pokemon, setPokemon] = useState({})
  

  const handleClick = e => {
       setPage(e.target.id)
  }

 

  useEffect (()=> {
    fetch(`https://pokeapi.co/api/v2/pokemon/${page}`)
    .then(res=>res.json())
    .then(data=>setPokemon(data))
  }, [page])

  return (
    <div className="App">
      <div>
      <h1>Pokemon</h1>
        </div>

        <div className = "main">
        {pokemon && <TarjetaPokemon nombre= {pokemon.name} peso ={pokemon.weight} largo={pokemon.height} img={pokemon.sprites && pokemon.sprites.front_default}/>}
        </div>
     <section>
       <button id="pikachu" onClick={handleClick}>Pikachu</button>
       <button id="charmander" onClick={handleClick}>Charmander</button>
       <button id="squirtle" onClick={handleClick}>Squirtle</button>
       <button id="bulbasaur" onClick={handleClick}>Bulbasur</button>       
       </section>      

       
    </div>
  );
}

export default App;
