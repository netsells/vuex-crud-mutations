/* eslint-disable no-undef */
import Vue from 'vue';
import Vuex from 'vuex';
import vuexCrudMutations from '../src/index';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
    },
    mutations: vuexCrudMutations('user'),
});
