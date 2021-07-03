<template>
  <div class="item">
    <span class="item-title">
      {{ title }}
    </span>

    <Fab v-model="model" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import Fab from "./Fab.vue";

@Component({
  components: {
    Fab,
  },
})
export default class Item extends Vue {
  @Prop() title?: string;
  model = true
}
</script>

<style lang="sass" scoped>
@import '@/styles/_mixins'

.item
  width: 100%
  height: 60px
  border-radius: 5px
  display: flex
  align-items: center
  justify-content: space-between
  padding-left: 20px
  padding-right: 10px

  @include use-theme(background-color, $neutral)

  &-title
    font-weight: 500
    font-size: 22px

    @include use-font(lato)
    @include use-theme(color, $gray-1)
</style>