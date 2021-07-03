<template>
  <div class="footer">
    <Container class="footer-container">
      <Button title="All" icon="list" :block="true" />
      <Button title="Favorites" icon="star" :block="true" />
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Button from './Button.vue';
import { Container } from '@/components/layout'

@Component({
  components: {
    Button,
    Container,
  },
})
export default class Footer extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'

.footer
  position: fixed
  width: 100%
  height: 80px
  bottom: 0
  box-shadow: 0 -5px 4px rgba(0, 0, 0, .05)

  display: flex
  align-items: center

  @include use-theme(background-color, $neutral)

  &-container
    width: 100%
    display: flex
    justify-content: center
    column-gap: 15px


</style>