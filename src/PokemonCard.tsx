import { useEffect, useState } from "react";
import { SinglePokemon } from "./Interfaces/PokemonInterface";
import "./styles/PokemonCard.css";
import PokemonModal from "./PokemonModal";

interface SinglePokemonProps {
  url: string;
}

export default function PokemonCard({ url }: SinglePokemonProps) {
  const [pokemon, setPokemon] = useState<SinglePokemon>();
  const pokemonUrl = url;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(pokemonUrl);
      if (response.status === 200) {
        const data = await response.json();
        setPokemon(data);
      } else {
        console.log("Error fetching Pokemon data");
      }
    }

    fetchPokemon();
  }, [pokemonUrl]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokemon-card-flex">
      <div className="pokeball-container">
        <div className="pokeball-top-circle">
          <p style={{ fontSize: "20px" }}> No. {pokemon.id}</p>
        </div>
        <div className="pokemon-card-center-circle"></div>
        <div className="pokemon-image-flex">
          <img
            className="pokemon-image"
            src={pokemon.sprites.front_default}
            alt={pokemon.name + " image"}
            title={pokemon.name + " image"}
            width="175"
            height="175"
            onClick={() => {
              openModalToggle();
            }}
          />
        </div>
        <div className="pokeball-bot-circle">
          <p style={{ marginTop: "25px", color: "black", margin: 0 }}>
            {pokemon.name.toUpperCase()}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <PokemonModal 
          isModalOpen={isModalOpen} 
          openModalToggle={openModalToggle}
          pokemon={pokemon}
        />
      )}
    </div>
  );
}