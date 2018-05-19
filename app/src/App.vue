<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
      name: 'App'
    }
</script>

<style>
    body {
        width: 100%;
        min-width: 1200px;
        margin: 0;
        padding: 0;
    }
    #app {
        margin: 0;
        padding: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
