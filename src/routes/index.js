//
import hello from '../components/HelloWorld';

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
Vue.use(Router);
//
var routes = [
    {
        component: hello,
        path: '/hello'
    }, {
        component: home,
        path: '/',
        // redirect: 'dynamicEffects',
        children:[
            {
                component: staticEffects,
                path: 'staticEffects'
            }, {
                component: dynamicEffects,
                path: 'dynamicEffects',
                name: 'dynamicEffects'
            }, {
                component: code,
                path: 'code'
            }, {
                component: generate,
                path: 'generate'
            }
        ]
    },

]

export default new Router({
   routes: routes
});
