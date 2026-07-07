import { API_BASE_URL } from "../constants/api";
import { Pokemon, PokemonResponse } from "../types/pokemon";
const API_URL = "http://localhost:3000";

const DEX_NUMBERS: Record<string, string> = {
  Bulbasaur: "001",
  Charmander: "004",
  Squirtle: "007",
};

export const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch(`${API_URL}/api/pokemon`);
  const data = await response.json();

  return data.pokemon.map((pokemon: any) => ({
    ...pokemon,
    dexNumber: DEX_NUMBERS[pokemon.name] || "???",
    classification: pokemon.classification || "Unknown",
    height: pokemon.height || "Unknown",
  }));
};




