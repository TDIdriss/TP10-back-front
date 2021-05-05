import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Fiche from '../views/Fiche.vue'
import Section from "../views/Section.vue";
import User from "../views/User.vue";
import Tag from "../views/Tag.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sections',
    name: 'Section',
    component: Section
  },
  {
    path: '/fiches',
    name: 'Fiche',
    component: Fiche
  },
  {
    path: '/tags',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/users',
    name: 'User',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
