<template>
  <label class="fab">
    <input type="checkbox" class="fab-input" v-model="model" />
    <img
      class="fab-unchecked"
      src="@/assets/icons/start-empty.png"
      alt="Estrella de favorito no seleccionado"
      v-if="!model"
    />
    <img
      class="fab-checked"
      src="@/assets/icons/start-check.png"
      alt="Estrella de favorito seleccionado"
      v-else
    />
  </label>
</template>

<script lang="ts">
import { Vue, Component, VModel } from "vue-property-decorator";

import Button from "./Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Fab extends Vue {
  @VModel() readonly model?: boolean;
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'

.fab
  width: 44px
  height: 44px
  border-radius: 100%
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer

  @include use-theme(background-color, $white-2)

  &:hover
    @include use-theme(background-color, $white-1)

    &-unchecked,
    &-checked
      width: 26px
      height: 26px

  &-input
    display: none
</style>