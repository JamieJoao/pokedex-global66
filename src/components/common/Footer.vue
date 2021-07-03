<template>
  <div class="footer">
    <Container class="footer-container">
      <Button
        :class="{ 'footer-button-disabled': tabActive === 'favorites' }"
        title="All"
        icon="list"
        :block="true"
        :onClick="() => setTab('all')"
      />
      <Button
        :class="{ 'footer-button-disabled': tabActive === 'all' }"
        title="Favorites"
        icon="star"
        :block="true"
        :onClick="() => setTab('favorites')"
      />
    </Container>
  </div>
</template>

<script lang="ts">
import { Mutation, State } from "vuex-class";
import { Vue, Component } from "vue-property-decorator";

import Button from "./Button.vue";
import { Container } from "@/components/layout";
import { AvailableTabs } from "@/types/types";

@Component({
  components: {
    Button,
    Container,
  },
})
export default class Footer extends Vue {
  @State tabActive!: AvailableTabs;
  @Mutation setTab!: (tab: AvailableTabs) => void;
}
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

  &-button-disabled,
  &-button-disabled:hover
    @include use-theme(background-color, $gray-3, false)

  &-container
    width: 100%
    display: flex
    justify-content: center
    column-gap: 15px
</style>