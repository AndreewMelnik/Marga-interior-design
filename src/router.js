import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/views/Home";
// import ProjectsPage from "@/views/Projects";
// import ServicesPage from "@/views/Services";
// import AboutPage from "@/views/About";
// import BlogPage from "@/views/Blog";
// import ContactPage from "@/views/Contact";

Vue.use(VueRouter)

//Обычный вызов компонента: component: HomePage, Lazy Loading: component: () => import('./views/Home')

let router = [
    {
        path: '/',
        name:"Home",
        component: HomePage
    },
    {
        path: '/Marga-interior-design/',
        name:"Home",
        component: HomePage
    },
    {
        path: '/projects',
        name: "Projects",
        component: () => import('./views/Projects.vue').then(m => m.default)
    },
    {
        path: '/services',
        name:"Services",
        component: () => import('./views/Services.vue').then(m => m.default)
    },
    {
        path: '/about',
        name:"About",
        component: () => import('./views/About.vue').then(m => m.default)
    },
    {
        path: '/blog',
        name:"Blog",
        component: () => import('./views/Blog.vue').then(m => m.default)
    },
    {
        path: '/contact',
        name:"Contact",
        component: () => import('./views/Contact.vue').then(m => m.default)
    }
]

     export default new VueRouter( {
    mode: 'history',
    routes: router
    }

)