import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2cc7e0d0 = () => interopDefault(import('..\\pages\\arquitecto\\index.vue' /* webpackChunkName: "pages/arquitecto/index" */))
const _45360d03 = () => interopDefault(import('..\\pages\\ciudades\\index.vue' /* webpackChunkName: "pages/ciudades/index" */))
const _e5bc72e6 = () => interopDefault(import('..\\pages\\edificio\\index.vue' /* webpackChunkName: "pages/edificio/index" */))
const _78037474 = () => interopDefault(import('..\\pages\\arquitecto\\arquitectoId\\_slug.vue' /* webpackChunkName: "pages/arquitecto/arquitectoId/_slug" */))
const _06f76795 = () => interopDefault(import('..\\pages\\ciudades\\cityId\\_slug.vue' /* webpackChunkName: "pages/ciudades/cityId/_slug" */))
const _46a606ee = () => interopDefault(import('..\\pages\\edificio\\edificioId\\_slug.vue' /* webpackChunkName: "pages/edificio/edificioId/_slug" */))
const _70c353ee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/arquitecto",
    component: _2cc7e0d0,
    name: "arquitecto"
  }, {
    path: "/ciudades",
    component: _45360d03,
    name: "ciudades"
  }, {
    path: "/edificio",
    component: _e5bc72e6,
    name: "edificio"
  }, {
    path: "/arquitecto/arquitectoId/:slug?",
    component: _78037474,
    name: "arquitecto-arquitectoId-slug"
  }, {
    path: "/ciudades/cityId/:slug?",
    component: _06f76795,
    name: "ciudades-cityId-slug"
  }, {
    path: "/edificio/edificioId/:slug?",
    component: _46a606ee,
    name: "edificio-edificioId-slug"
  }, {
    path: "/",
    component: _70c353ee,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
