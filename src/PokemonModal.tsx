import "./styles/PokemonModal.css"
import { SinglePokemon } from "./Interfaces/PokemonInterface"

interface PokemonModalProps {
  isModalOpen: boolean;
  openModalToggle: () => void;
  pokemon: SinglePokemon;
}

export default function PokemonModal({
  isModalOpen,
  openModalToggle,
  pokemon
}: PokemonModalProps) {
  const closeModal = () => {
    openModalToggle();
  };
console.log(pokemon)
  return (
    <>
      {
        !isModalOpen ?
          null
          :
          <div className="modal-container" onClick={closeModal}>
            <div className="modal-content">
              <img 
                src={pokemon.sprites.front_default}
                alt={pokemon.name + " image"}
                title={pokemon.name + " image"}
                width="200"
                height="325"
              />
              <div className="pokemon-data">
                <p
                  style={{
                    fontSize: '30px'
                  }}
                >{pokemon.name.toUpperCase()}</p>
                <p
                  style={{
                    fontSize: '30px'
                  }}
                >TYPES: </p>
                {
                  pokemon.types.map((type) => (
                    <p
                      style={{
                        fontSize: '20px'
                      }}  
                    >
                      {type.type.name}
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
      }
    </>
  );
}