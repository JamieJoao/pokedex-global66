<template>
  <div class="list">
    <ul>
      <li v-for="(item, i) in items" :key="i">
        <Item title="bulbasaur" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import Item from "./Item.vue";

@Component({
  components: {
    Item,
  },
})
export default class List extends Vue {
  @Prop() items?: any[];
}
</script>

<style lang="sass" scoped>
.list
  ul
    list-style: none
    padding-left: 0
    display: flex
    flex-direction: column
    row-gap: 10px

    li
      width: 100%
</style>