<template>
  <div class="home">
    <div class="home-container" v-if="!loading">
      <Container>
        <Input
          class="home-input"
          placeholder="Search"
          icon="search"
          v-model="$store.state.filter"
        />

        <List class="home-list" />
      </Container>

      <Modal v-if="showModal">
        <PokemonInfo />
      </Modal>

      <Footer />
    </div>
    <div v-else class="home-loader">
      <Loader />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";

import { Container } from "@/components/layout";
import {
  Input,
  Button,
  Footer,
  List,
  Modal,
  PokemonInfo,
  Loader,
} from "@/components/common";
import { fetchPokemons } from "@/services";
import { PokemonGeneralInfo } from "@/types/responses";

@Component({
  components: {
    Container,
    Input,
    Button,
    Footer,
    List,
    Modal,
    PokemonInfo,
    Loader,
  },
})
export default class Home extends Vue {
  @State loading!: boolean;
  @State showModal!: boolean;
  @Action fillPokemonsAction!: (pokemons: PokemonGeneralInfo[]) => void;
  @Action createPokemonsMapAction!: () => void;
  @Mutation toggleLoading!: () => void;

  searchModel = "";

  handleToggleModal() {
    this.showModal = !this.showModal;
  }

  async fakeFetching() {
    const pokemons = await fetchPokemons();
    this.fillPokemonsAction(pokemons || []);
    this.createPokemonsMapAction();

    this.toggleLoading();
  }

  async mounted() {
    this.toggleLoading();
    setTimeout(this.fakeFetching, 3000);
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'

.home
  &-input
    margin-top: 35px

    &::placeholder
      @include use-theme(color, $gray-3)

  @include use-font(lato)

  &-list
    margin-top: 40px
    margin-bottom: 100px

  &-loader
    width: 106px
    height: 106px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>