<template>
  <div class="about">
    <Container class="about-container">
      <img
        class="about-image"
        src="@/assets/images/pikachu-png.png"
        alt="Imagen de Pikachu"
      />
      <span class="about-greeting">Welcome to Pokédex</span>
      <span class="about-description">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </span>

      <Button title="Get started" class="button-started" :onClick="goHome" />
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Container } from "@/components/layout";
import { Button } from "@/components/common";

@Component({
  components: {
    Container,
    Button,
  },
})
export default class Welcome extends Vue {
  goHome() {
    console.log("Go Home!");
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'

.about
  position: relative
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

  padding-left: 24px
  padding-right: 24px

  @include use-font(lato)

  &-container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

  &-image
    width: 325px

  &-greeting
    font-size: 26px
    font-weight: bold
    margin-top: 60px

    @include use-theme(color, $gray-1)

  &-description
    font-size: 18px
    font-size: medium
    margin-top: 30px
    text-align: center

  .button-started
    margin-top: 50px
</style>