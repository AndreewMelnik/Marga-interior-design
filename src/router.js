import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/views/Home";
import ProjectsPage from "@/views/Projects";
import ServicesPage from "@/views/Services";
import AboutPage from "@/views/About";
import BlogPage from "@/views/Blog";
import ContactPage from "@/views/Contact";

Vue.use(VueRouter)


const router = [
    {
        path: '/',
        name:"Home",
        component: HomePage,
    },
    {
        path: '/Marga-interior-design/',
        name:"Home",
        component: HomePage,
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