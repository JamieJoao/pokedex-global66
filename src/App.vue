<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/home">Home</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="sass" src="./styles/global.sass"></style>
<style lang="sass" scoped>
  @import '@/styles/_mixins'
  
  #app
    position: fixed
    width: 100%
    height: 100%
    @include use-theme(background-color, $white-3)
</style>
