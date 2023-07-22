import { ReactNode } from "react";
import { QueryClient } from "react-query";

export interface SinglePokemon {
  name: string;
  height: string;
  base_experience: string;
  id: string;
  order: string;
  sprites: Sprites;
}

interface Sprites {
  front_default: string;
  back_default: string;
}

export interface PokemonCardProps {
  pokemon: SinglePokemon;
}

export interface PaginatedPokemon {
  name: string;
  url: string;
}
export interface PokemonsData {
  results: PaginatedPokemon[];
}

export interface PokemonsDataI {
  results: PaginatedPokemon[];
  count: number;
  next: string;
  previous: string;
}

export interface PaginationPokemonData {
  count: number;
  next: string;
  previous: string;
  url: string;
}

export interface UseQueryData {
  offset: string;
  limit: string;
}

export interface QueryClientInterface {
  queryClient: QueryClient;
  children: ReactNode;
}


