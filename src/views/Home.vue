<template>
  <div class="home">
    <Container>
      <Input
        class="home-input"
        placeholder="Search"
        icon="search"
        v-model="searchModel"
      />

      <div class="home-empty-list" v-if="false">
        <span>Uh-oh!</span>
        <span>You look lost on your journey!</span>

        <Button title="Go back home" :onClick="goBack" />
      </div>

      <List class="home-list" :items="itemsFabs" />
    </Container>

    <!-- <Button title="Launch Modal" :onClick="handleToggleModal" /> -->
    <Modal v-if="showModal" @close="handleToggleModal">
      <PokemonInfo />
    </Modal>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Container } from "@/components/layout";
import {
  Input,
  Button,
  Footer,
  List,
  Modal,
  PokemonInfo,
} from "@/components/common";

import router from "@/router";

@Component({
  components: {
    Container,
    Input,
    Button,
    Footer,
    List,
    Modal,
    PokemonInfo,
  },
})
export default class Home extends Vue {
  searchModel = "";
  itemsAll: any[] = new Array(50).fill(1);
  itemsFabs: any[] = new Array(4).fill(2);
  showModal = true;

  handleToggleModal() {
    this.showModal = !this.showModal;
  }

  goBack() {
    router.back();
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

  &-empty-list
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
</style>