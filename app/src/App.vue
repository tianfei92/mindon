<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e4bf056f678007efe2671f0a3e17c847";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();

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
