import { useEffect, useState } from "react";
import { SinglePokemon } from "./Interfaces/PokemonInterface";
import './styles/PokemonCard.css'

interface SinglePokemonProps {
  url: string;
}

export default function PokemonCard({ url }: SinglePokemonProps) {
  const [pokemon, setPokemon] = useState<SinglePokemon>()
  const pokemonUrl = url

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(pokemonUrl)
      if (response.status === 200) {
        const data = await response.json()
        setPokemon(data);
      } else {
        console.log('Error fetching Pokemon data')
      }
    }

    fetchPokemon();
  }, [pokemonUrl]);

  if (!pokemon) {
    return <p>Loading...</p>
  }

  return (
    <div className="pokemon-card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name + ' image'}
        title={pokemon.name + ' image'}
        width='175'
        height='175'
      />
      <p> No. {pokemon.id}</p>  
      <p>{pokemon.name.toUpperCase()}</p>
    </div>
  )
}