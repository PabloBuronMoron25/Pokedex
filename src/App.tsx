import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPokemons } from './service/pokemonService';
import header from './assets/header.jpeg';
import PokemonCard from './components/PokemonCard';
import type { PokemonCardTypes } from './types/type';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {

    fetchPokemons()
      .then(setPokemons)
      .catch((err: any) => {

        console.log(err.message)
      })

  }, [])


  return (

    <div className=" container p-0 shadow ">
      <header  className='justify-content-center d-flex header-bg '>
        <img style={{ overflow: 'hidden' }} src={header} alt="" />
      </header>

      <div className='row p-3 justify-content-center bg-white' >

        {pokemons.map((pokemon: PokemonCardTypes) => (

          <div className='col-md-6 col-lg-4 mb-3'>

            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />


          </div>
        ))}


      </div>

      <footer className='footer-bg'>
        <h1>© Pablo Burón Morón</h1>
      </footer>

    </div>


  )

}

export default App;
