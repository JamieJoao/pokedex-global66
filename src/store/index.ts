import { PokemonGeneralInfo } from '@/types/responses'
import { PokemonsMap } from '@/types/types'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: '',
    showModal: false,
    currentPokemon: null,
    pokemons: [],
    pokemonsMap: {} as PokemonsMap,
    tabActive: 'all',
    loading: false,
  },
  mutations: {
    fillPokemons(state, pokemons) {
      state.pokemons = pokemons.map(
        (pokemon: PokemonGeneralInfo) => ({ ...pokemon, favorite: false })
      )
    },
    toggleLoading(state) {
      state.loading = !state.loading
    },
    toggleModal(state) {
      state.showModal = !state.showModal
    },
    setTab(state, payload) {
      state.tabActive = payload
    },
    setFavorite(state, payload: PokemonGeneralInfo) {
      state.pokemonsMap[payload.name].favorite = payload.favorite
    },
    setCurrentPokemon(state, payload) {
      state.currentPokemon = payload
    },
    createPokemonsMap(state) {
      state.pokemonsMap = state.pokemons.reduce((acc, pokemon: PokemonGeneralInfo) => {
        return { ...acc, [pokemon.name]: pokemon }
      }, {})
    }
  },
  actions: {
    fillPokemonsAction(context, pokemons) {
      context.commit('fillPokemons', pokemons)
    },
    createPokemonsMapAction(context) {
      context.commit('createPokemonsMap')
    },
    setCurrentPokemonAction(context, pokemon) {
      context.commit('setCurrentPokemon', pokemon)
    },
    setFavoriteAction(context, pokemon) {
      context.commit('setFavorite', pokemon)
    }
  },
  modules: {

  },
  getters: {
    getPokemons(state) {
      return state.pokemons.filter(
        (pokemon: PokemonGeneralInfo) => {
          return (pokemon.name.toLowerCase().includes(state.filter) && (state.tabActive === 'all' || pokemon.favorite))
        }
      )
    },
  }
})
