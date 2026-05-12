import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPokemons } from './service/pokemonService';
import header from './assets/header.jpeg';
import PokemonCard from './components/PokemonCard';
import type { PokemonCardTypes, SearchType } from './types/type';
import Search from './components/Search';
import { Search as SearchIcon } from "lucide-react";

function App() {

  const [pokemons, setPokemons] = useState<PokemonCardTypes[]>([]);
  const [filtroPokemon, setFiltroPokemon] = useState<PokemonCardTypes[]>([]);

  useEffect(() => {

    fetchPokemons()
      .then(pokemons => {
        setPokemons(pokemons);
        setFiltroPokemon(pokemons);
      })

      .catch((err: any) => {

        console.log(err.message)
      })

  }, [])

  const handleSearch = (query: string) => {

    if (!query) {
      setFiltroPokemon(pokemons)
    }
    else {
      setFiltroPokemon(
        pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(query.toLowerCase())
        )
      )
    }

  }
  return (

    <div className=" container p-0 shadow ">
      <header className='justify-content-center d-flex header-bg '>
        <img style={{ overflow: 'hidden' }} src={header} alt="" />
      </header>
      <div className='row justify-content-center pt-3'>
        <div className='row justify-content-center pt-4 px-2'>
          
          <div className='col-11 col-sm-8 col-md-6 col-lg-4'>
            
            <Search onSearch={handleSearch} />
          </div>
        </div>
      </div>

      <div className='row p-3 justify-content-center bg-white' >

        {filtroPokemon.map((pokemon: PokemonCardTypes) => (

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
