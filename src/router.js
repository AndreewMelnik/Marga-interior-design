import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
Vue.use(VueRouter)


const router = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/Home',
        component: () => import('./pages/HomePage')
    },
    {
        path: '/about',
        name:"About",
        component: AboutPage},

]

export default new VueRouter( {
    mode: 'history',
    routes: router
    }

)