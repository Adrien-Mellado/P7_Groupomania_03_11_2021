import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'

Vue.use (Router)


export default new Router ({

    mode: 'history',
    routes : [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register}
    ]
})