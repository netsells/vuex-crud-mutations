/* eslint-disable no-undef */
const Vue = require('vue');
const Vuex = require('vuex');
const vuexCrudMutations = require('../index');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state: {
        users: [],
    },
    mutations: vuexCrudMutations('user'),
});
