<template>
  <div id="app">

<!-- trying to build as a single page app but the router links aren't loading properly -->
    <div class="top">
      <router-view></router-view>
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/gallery">Gallery</router-link>
      <router-link class="links" to="/menu">Menu</router-link>
      <router-link class="links" to="/about">About</router-link>
  </div>
  <!-- Testing image prop -->
      <gallery-page v-bind="src"></gallery-page>
    <div class="gallery" v-for="image in gallery">
        <img class="img" v-bind:src="src" v-bind:alt="alt" v-bind:title="title">
    </div>

    <div class="background"><h1>Comida Oaxacana</h1></div>
<!-- footer as slot -->
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  el: '#app',
    props: ['writers'],
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.background {
  background: url('./assets/lindsay-moe.jpg') center;
  background-size: cover;
  height: 100vh;
}

.top {
  background-color: #ACD143;
  padding: 2rem;
}

.links {
  list-style-type: none;
  padding: 1rem;
  text-decoration: none;
  color: black;
}

h1, h2 {
  font-weight: bold;
  font-size: 5em;
}

ul {
  list-style-type: none;
  padding: 0;
}

/* li {
  display: inline-block;
  margin: 0 10px;
} */

a {
  color: #42b983;
}
</style>
