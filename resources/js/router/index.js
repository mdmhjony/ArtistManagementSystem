import { createWebHistory, createRouter } from "vue-router";

import AboutPage from '../pages/AboutPage.vue';
import LoginPage from '../pages/LoginPage.vue';





import HomePage from '../pages/HomePage.vue';

const routes= [
{  
    path: '/',
    name: 'HomePage',
    component: HomePage,
},

{  
    path: '/loignPage',
    name: 'LoginPage',
    component: LoginPage,
},
{  
    path: '/aboutPage',
    name: 'AboutPage',
    component: AboutPage,
},
];



const router =createRouter({
    history:createWebHistory(),
    routes : routes//routes:routes  ar alternative a only routes dilei hbe//here will give propoerty name and variable name but even here is same both name so we can give only one
});


export default router;