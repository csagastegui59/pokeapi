import { useEffect, useState } from 'react';
import { PokemonsDataI } from './Interfaces/PokemonInterface';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import './styles/Pokemons.css'
const Pokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonsDataI>();
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9')

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(url)
      if (response.status === 200) {
        const data = await response.json()
        setPokemons(data);
      } else {
        console.log('Error fetching Pokemon data')
      }
    }

    fetchPokemon();
  }, [url]);

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
  };

  if (!pokemons) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className='pokemons-container'>
        {pokemons.results.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
      <div className='pagination-container'>
        <Pagination
          count={pokemons.count}
          next={pokemons.next}
          previous={pokemons.previous}
          url={url}
          onUrlChange={handleUrlChange}
        />
      </div>
    </>
  );
};

export default Pokemons;