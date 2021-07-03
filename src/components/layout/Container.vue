<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Container extends Vue {}
</script>

<style lang="sass">
@import '@/styles/_variables'

.container
  width: 100%
  margin-left: auto
  margin-right: auto

  padding-left: 30px
  padding-right: 30px

  max-width: $xs
</style>