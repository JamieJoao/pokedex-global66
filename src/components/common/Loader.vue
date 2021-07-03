<template>
  <img
    class="animate__animated animate__bounce animate__infinite"
    src="@/assets/images/pokebola.png"
    alt="Indicador de carga de datos"
  />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Loader extends Vue {}
</script>