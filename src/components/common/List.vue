<template>
  <div class="list">
    <ul v-if="getPokemons.length">
      <li v-for="pokemonInfo in getPokemons" :key="pokemonInfo.name">
        <Item :pokemonInfo="pokemonInfo" />
      </li>
    </ul>

    <div class="list-empty" v-else>
      <span>Uh-oh!</span>
      <span>You look lost on your journey!</span>

      <Button title="Go back home" :onClick="goBack" />
    </div>
  </div>
</template>

<script lang="ts">
import { Getter } from "vuex-class";
import { Vue, Component } from "vue-property-decorator";

import { PokemonGeneralInfo } from "@/types/responses";
import router from "@/router";
import Item from "./Item.vue";
import Button from './Button.vue';

@Component({
  components: {
    Item,
    Button,
  },
})
export default class List extends Vue {
  @Getter getPokemons!: PokemonGeneralInfo[];

  goBack() {
    router.back();
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'

.list
  &-empty
    margin-top: 50px
    text-align: center

    span
      display: block

      @include use-font(lato)

      &:nth-child(1)
        font-weight: bold
        font-size: 36px
        margin-bottom: 10px

        @include use-theme(color, $gray-1)

      &:nth-child(2)
        font-size: 20px
        font-weight: 500
        margin-bottom: 25px

  ul
    list-style: none
    padding-left: 0
    display: flex
    flex-direction: column
    row-gap: 10px

    li
      width: 100%
</style>