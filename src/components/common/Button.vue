<template>
  <button
    class="button"
    @click="onClick"
    :disabled="disabled"
    :class="{ 'button-disabled': disabled }"
  >
    <span class="button-title">
      {{ title }}
    </span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() title!: string;
  @Prop() disabled!: number;
  @Prop() onClick?: () => void;
}
</script>

<style lang="sass">
@import '@/styles/_mixins'

.button
  padding: 11px 20px
  border-radius: 60px
  border: none
  cursor: pointer

  @include use-theme(background-color, $red-2)

  &:hover,
  &:active
    @include use-theme(background-color, $red-3)

  &:disabled
    opacity: .5

  &-title
    font-size: 18px
    font-weight: medium

    @include use-theme(color, $contrast)
</style>