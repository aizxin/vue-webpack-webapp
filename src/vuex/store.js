"use strict";
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	newMovie: [],
	loding: false,
	title: '',
	listMovie:[],
};

const mutations = {
	FETCH_NEWMOVIE_SUCCESS(state, newMovie) {
		state.newMovie = newMovie;
	},
	FETCH_LODING(state, loding) {
		state.loding = loding;
	},
	FETCH_TITLE(state, title) {
		state.title = title;
	},
	FETCH_LISTMOVIE_SUCCESS(state, listMovie) {
		state.listMovie = listMovie;
	},
	FETCH_LISTMOREMOVIE_SUCCESS(state, movie) {
		state.listMovie = [...state.listMovie, ...movie]
	},
};

export default new Vuex.Store({
	state,
	mutations
})