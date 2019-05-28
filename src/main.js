import Vue from 'vue'
import App from './App'
import Footer from './footer.vue'
import Gallery from './gallery.vue'
import Menu from './menu.vue'
import About from './about.vue'


Vue.component('app-footer', Footer)

// passing props
Vue.component('gallery-page', {
  props: {
    src: './assets/food4.jpg',
    title: 'our restaurant',
    alt: 'our restaurant'
  },
  template: `<img src={{src}}>`
})

// attempting to add in router here
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {Router} from './routes'
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

const app = new Vue({
  router
}).$mount('#app')
