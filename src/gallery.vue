<template>
  <div>
    <div class=background><h1>Gallery</h1></div>
      <p>Oaxaca is known in culinary circles for its unique and wonderfully spicy dishes. Our food reflects centuries of tradition and culture.</p>

      <!-- <gallery-page title="our restaurant" src="./assets/food4.jpg" alt="our restaurant"></gallery-page> -->


    <!-- <div class="gallery" v-for="image in gallery">
      <img class="img" v-bind:src="image.picture" v-bind:alt="image.alt">
    </div> -->
  </div>
</template>

<script>
export default {
name: 'gallery',
data () {
return {
title:'Gallery'
// gallery:[
//   { picture: require('./assets/food4.jpg'), alt:'our restaurant' },
//   { picture: require('./assets/edgar-castrejon.jpg'), alt:'fresh tacos' },
//   { picture: require('./assets/food1.jpg'), alt:'camarones con rojo' },
//   { picture: require('./assets/karly-gomez.jpg'), alt:'huevos rancheros' },
//   { picture: require('./assets/food6.jpg'), alt:'fresh steak and tacos' },
//   { picture: require('./assets/food3.jpg'), alt:'chips with homemade guacomole' }
// ],
}
}
}
</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  font-size: 5em;
}

ul, .footer {
  list-style-type: none;
  padding: 1rem;
    background-color: #ACD143;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

p {
  justify: center;
}
.gallery {
  display: flex;
  margin: 1rem;
}

.img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-direction: row;
  flex-wrap: wrap;


}
</style>
