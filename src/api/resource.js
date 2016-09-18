"use strict";
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// HTTP相关
Vue.http.options.crossOrigin = true

export const getMovie = (movieType, data) => {
	return Vue.http.jsonp('http://api.douban.com/v2/movie/' + movieType, data)
};