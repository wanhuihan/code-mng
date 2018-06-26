//
import test from '../components/test';

import Vue from 'vue';
//
import Router from 'vue-router';
//
import staticEffects from '../components/staticEffects';
//
import dynamicEffects from '../components/dynamicEffects';
//
import home from '../components/home';
//
import code from '../components/code';
//
import generate from '../components/codeGenerate';
//
import preview from '../components/codeGenerate/preview';
//
import homeIndex from '../components/homeIndex';
//
Vue.use(Router);
//
var routes = [
    {
        component: home,
        path: '/',
        redirect: 'index',
        children:[
            {
                component: homeIndex,
                path: 'index',
                name: 'index',
            },
            {
                component: staticEffects,
                path: 'staticEffects',
                name: 'staticEffects'
                // name: 'staticEffects'
            }, {
                component: dynamicEffects,
                path: 'dynamicEffects',
                name: 'dynamicEffects'
            }, {
                component: code,
                path: 'code'
            }, {
                component: preview,
                path: 'preview',
                name: 'preview'
            }
        ]
    },

]

export default new Router({
   routes: routes
});
