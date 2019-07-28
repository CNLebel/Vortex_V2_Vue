import Router from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import PublicContainer from './components/tabbar/PublicContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import UserInfomation from './components/tabbar/UserInfomation.vue'
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
            path: '/users',
            component: UserInfomation,
            name: 'users'
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