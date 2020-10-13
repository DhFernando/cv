import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/index.vue'
import About from '../pages/about/index.vue'
import Skills from '../pages/Skills.vue'
import Projects from '../pages/Projects.vue'
import Experience from '../pages/Experience.vue' 

Vue.use(VueRouter)

const routes = [

    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/skills', name: 'Skills', component: Skills },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/experience', name: 'Experience', component: Experience }, 
   
  ]

  let router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router