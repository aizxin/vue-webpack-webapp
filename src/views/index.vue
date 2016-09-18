<template>
  <vue-header :title="title" right="search"></vue-header>
  <section class="ui-container">
    <vv-movie :movie="movie" ></vv-movie>
  </section>
</template>

<script>
  "use strict";
  import vueHeader from './../components/header.vue';
  import theaters from './../components/theaters.vue';
  import { fetchMovie } from './../vuex/actions';
  import { getMovie } from './../vuex/getters';
  export default {
    data (){
      return {
        title: '电影',
      }
    },
    vuex: {
      actions: {
        fetchMovie
      },
      getters: {
        movie: getMovie,
      },
    },
    created() {
      this.fetchMovie();
      document.title = this.title;
    },
    components: {
      'vvMovie': theaters,
      'vueHeader':vueHeader
    },
  }
</script>