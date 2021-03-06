<template>
  <button
    class="button"
    @click="handleClick"
    :disabled="disabled"
    :class="{ 'button-block': block }"
  >
    <i class="button-icon" :class="[`fa fa-${icon}`]" v-if="icon"></i>
    <span class="button-title" v-if="title">
      {{ title }}
    </span>

    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() readonly title!: string;
  @Prop() readonly disabled!: boolean;
  @Prop() readonly block!: boolean;
  @Prop() readonly icon?: string;
  @Prop() readonly onClick?: () => void;

  handleClick() {
    this.onClick?.call(null);
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'
@import '@/styles/_variables'

.button
  padding: 0 20px
  height: 44px
  border-radius: 60px
  border: none
  cursor: pointer
  display: inline-flex
  justify-content: center
  align-items: center

  @include use-theme(background-color, $red-2)

  &:hover,
  &:active
    @include use-theme(background-color, $red-3)

  &:disabled
    opacity: .5

  &-block
    width: 100%

  &-icon
    font-size: 22px
    margin-right: 10px

  &-title
    font-size: 18px
    font-weight: 500

  &-icon,
  &-title
    @include use-theme(color, $contrast)

  @include use-media(max, $xs)
</style>
