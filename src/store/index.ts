import { fetchPokemons } from '@/services'
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
    setPokemons(state, payload) {
      state.pokemons = payload.map(
        (pokemon: PokemonGeneralInfo) => ({ ...pokemon, favorite: false })
      )
    },
    createPokemonsMap(state) {
      state.pokemonsMap = state.pokemons.reduce((acc, pokemon: PokemonGeneralInfo) => {
        return { ...acc, [pokemon.name]: pokemon }
      }, {})
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
    setFavorite(state, { name, favorite }: PokemonGeneralInfo) {
      state.pokemonsMap[name].favorite = favorite
    },
    setCurrentPokemon(state, payload) {
      state.currentPokemon = payload
    },
  },
  actions: {
    async fetchPokemonsAction({ commit }) {
      commit('toggleLoading')
      const pokemons = await fetchPokemons()

      /**
       * Timeout solo para dar la impresión de carga lenta y se vea el loader
       */
      setTimeout(() => {
        commit('setPokemons', pokemons)
        commit('createPokemonsMap')
        commit('toggleLoading')
      }, 1500)
    },
    setCurrentPokemonAction({ commit }, pokemon) {
      commit('setCurrentPokemon', pokemon)
    },
    setFavoriteAction({ commit }, pokemon) {
      commit('setFavorite', pokemon)
    }
  },
  modules: {

  },
  getters: {
    getPokemons({ pokemons, filter, tabActive }) {
      return pokemons.filter(
        (pokemon: PokemonGeneralInfo) => {
          return (
            pokemon.name.toLowerCase().includes(filter) && (tabActive === 'all' || pokemon.favorite)
          )
        }
      )
    },
  }
})
