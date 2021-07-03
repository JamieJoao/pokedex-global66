<template>
  <div class="pokemon">
    <div class="pokemon-scenery">
      <img src="@/assets/images/scenery.png" alt="" />
    </div>

    <div class="pokemon-properties">
      <div class="pokemon-property">
        <span>Name:</span>
        <span>Squirtle</span>
      </div>
      <div class="pokemon-property">
        <span>Weight:</span>
        <span>20</span>
      </div>
      <div class="pokemon-property">
        <span>Height:</span>
        <span>18</span>
      </div>
      <div class="pokemon-property">
        <span>TYpes:</span>
        <span>Normal, Water</span>
      </div>
    </div>

    <div class="pokemon-share">
      <Button title="Share to my friends" />
      <Fab />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Button from "./Button.vue";
import Fab from "./Fab.vue";

@Component({
  components: {
    Button,
    Fab,
  },
})
export default class PokemonInfo extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'
@import '@/styles/_variables'

.pokemon
  &-scenery
    overflow: hidden

  &-properties
    padding: 0 30px
    padding-top: 10px

    .pokemon-property
      padding: 10px 0
      border-bottom: 1px solid $white-1

      span
        font-size: 18px
        font-weight: 500

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