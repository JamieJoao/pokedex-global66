<template>
  <div class="modal">
    <div class="modal-overlay">
      <Container>
        <div class="modal-content">
          <button class="button-close" @click="toggleModal">
            <i class="fa fa-times-circle"></i>
          </button>
          <slot></slot>
        </div>
      </Container>
    </div>
  </div>
</template>

<script lang="ts">
import { Mutation } from "vuex-class";
import { Vue, Component } from "vue-property-decorator";

import { Container } from "@/components/layout";

@Component({
  components: {
    Container,
  },
})
export default class Modal extends Vue {
  @Mutation toggleModal!: () => void;
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'

.modal
  &-overlay
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, .6)
    transition: opacity .3s linear
    z-index: 9999
    display: flex
    justify-content: center
    align-items: center

  &-content
    position: relative
    overflow-y: auto
    border-radius: 5px

    @include use-theme(background-color, $neutral)

    .button-close
      position: absolute
      width: 26px
      height: 26px
      right: 15px
      top: 15px
      border-radius: 100%
      border: none
      background-color: transparent
      cursor: pointer
      z-index: 1

      i
        font-size: 26px

        @include use-theme(color, $neutral)

.modal-hidden
  visibility: hidden
  opacity: 0
</style>