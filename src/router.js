import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";

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
        path: '/projects',
        name:"Projects",
        component: ProjectsPage},
    {
        path: '/services',
        name:"Services",
        component: ServicesPage},
    {
        path: '/about',
        name:"About",
        component: AboutPage},
    {
        path: '/blog',
        name:"Blog",
        component: BlogPage},
    {
        path: '/contact',
        name:"Contact",
        component: ContactPage}
]

export default new VueRouter( {
    mode: 'history',
    routes: router
    }

)