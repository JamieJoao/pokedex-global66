<template>
  <div class="input">
    <i v-if="icon" class="fa fa-search input-icon"></i>
    <input
      type="text"
      class="input-element"
      :placeholder="placeholder"
      v-model="model"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop() placeholder?: string;
  @Prop() icon?: string;
  @VModel() model?: string;
}
</script>

<style lang="sass">
@import '@/styles/_mixins'

.input
  height: 50px
  border-radius: 5px
  padding: 0 16px
  box-shadow: 0 2px 10px rgba(0, 0, 0, .04)
  display: flex
  align-items: center

  @include use-font(Montserrat)
  @include use-theme(color, $gray-1)
  @include use-theme(background-color, $neutral)

  &-element
    width: 100%
    border: none
    outline: none
    font-size: 16px
    font-weight: 500

    @include use-theme(background-color, $neutral)

    &::placeholder
      @include use-theme(color, $gray-3)

  &-icon
    font-size: 18px
    margin-right: 10px

    @include use-theme(color, $gray-3)
</style>