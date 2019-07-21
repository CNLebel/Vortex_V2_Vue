import Router from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import PublicContainer from './components/tabbar/PublicContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import SetupContainer from './components/tabbar/SetupContainer.vue'
import UserRegister from './components/users/UserRegister'
import UserLogin from './components/users/UserLogin'


export default new Router({
    routes: [
        {
            path: '/',
            redirect: "/home"
        },
        {
            path: '/home',
            component: HomeContainer,
            name: 'home'
        },
        {
            path: '/public',
            component: PublicContainer,
            name: 'public'
        },
        {
            path: '/search',
            component: SearchContainer,
            name: 'search'
        },
        {
            path: '/setup',
            component: SetupContainer,
            name: 'setup'
        },
        {
            path: '/register',
            component: UserRegister,
            name: 'register'
        },
        {
            path: '/login',
            component: UserLogin,
            name: 'login'
        }
    ]

})