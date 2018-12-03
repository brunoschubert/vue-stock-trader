import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './module/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
});