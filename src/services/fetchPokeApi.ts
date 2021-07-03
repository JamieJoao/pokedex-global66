import { pokemonDB } from "@/api/pokemonDB"
import { PokemonResponse, PokemonGeneralInfo, PokemonData } from '@/types/responses'

export const fetchPokemons = async () => {
  try {
    let pokemons: PokemonGeneralInfo[] = []
    const res = await pokemonDB.get<PokemonResponse>('')

    if (res.status === 200) {
      const { data: { results } } = res
      pokemons = results
    }

    return pokemons

  } catch (error) {
    console.log('[fetching pokeapi error]')
  }

}

export const fetchSinglePokemon = async (pokemonName: string) => {
  try {
    const res = await pokemonDB.get<PokemonData>(pokemonName)

    if (res.status === 200) {
      const { data } = res
      return data
    }

  } catch (error) {
    console.log('[fetching pokeapi error]')
  }
}