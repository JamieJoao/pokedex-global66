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
import { State, Action } from "vuex-class";

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
  @Action fetchPokemonsAction!: () => void;

  searchModel = "";

  handleToggleModal() {
    this.showModal = !this.showModal;
  }

  mounted() {
    this.fetchPokemonsAction()
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