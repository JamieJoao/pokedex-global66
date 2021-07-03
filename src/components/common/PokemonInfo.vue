<template>
  <div class="pokemon">
    <div class="pokemon-scenery">
      <img src="@/assets/images/scenery.png" alt="" />

      <img
        class="pokemon-figure"
        :src="pokemonFigure"
        alt="Figura de pokemon"
        v-if="pokemonFigure"
      />
    </div>

    <div class="pokemon-properties">
      <div class="pokemon-property">
        <span>Name:</span>
        <span>{{ currentPokemon.name }}</span>
      </div>
      <div class="pokemon-property">
        <span>Weight:</span>
        <span>{{ infoPokemon.weight }}</span>
      </div>
      <div class="pokemon-property">
        <span>Height:</span>
        <span>{{ infoPokemon.height }}</span>
      </div>
      <div class="pokemon-property">
        <span>Types:</span>
        <span>{{ pokemonTypes }}</span>
      </div>
    </div>

    <div class="pokemon-share">
      <Button title="Share to my friends" />
      <Fab v-model="model" />
    </div>
  </div>
</template>

<script lang="ts">
import { State, Action } from "vuex-class";
import { Vue, Component, Watch } from "vue-property-decorator";

import Button from "./Button.vue";
import Fab from "./Fab.vue";
import { PokemonData, PokemonGeneralInfo } from "@/types/responses";
import { fetchSinglePokemon } from "@/services";
import { PokemonsMap } from "@/types/types";

@Component({
  components: {
    Button,
    Fab,
  },
})
export default class PokemonInfo extends Vue {
  @State currentPokemon!: PokemonGeneralInfo;
  @State pokemonsMap!: PokemonsMap;
  @Action setFavoriteAction!: (pokemon: PokemonGeneralInfo) => void;

  infoPokemon = {} as PokemonData;
  model = false;

  async mounted() {
    this.model = this.currentPokemon.favorite;
    const res = await fetchSinglePokemon(this.currentPokemon.name);
    if (res) {
      this.infoPokemon = res;
    }
  }

  @Watch("model")
  watchFavorite(val: boolean) {
    this.currentPokemon.favorite = val;
    this.setFavoriteAction(this.currentPokemon);
  }

  get pokemonTypes() {
    return this.infoPokemon.types?.map((type) => type.type.name).join(", ");
  }

  get pokemonFigure() {
    return this.infoPokemon.sprites?.other?.["official-artwork"].front_default;
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'
@import '@/styles/_variables'

.pokemon
  &-scenery
    position: relative
    overflow: hidden

  &-figure
    position: absolute
    width: 180px
    height: 180px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    user-select: none

  &-properties
    padding: 0 30px
    padding-top: 10px

    .pokemon-property
      padding: 10px 0
      border-bottom: 1px solid $white-1

      span
        font-size: 18px
        font-weight: 500
        text-transform: capitalize

        @include use-theme(color, $gray-1)
        @include use-font(lato)

        &:first-child
          font-weight: bold
          margin-right: 8px

  &-share
    display: flex
    column-gap: 16px
    justify-content: space-between
    align-items: center
    padding: 20px 30px

    button
      @include use-media(max, $xs)
        flex: 1
</style>