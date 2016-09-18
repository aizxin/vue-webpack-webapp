<template>
  <section class="ui-container">
    <vv-movie :movie="movie" ></vv-movie>
  </section>
</template>

<script>
  "use strict";
  import theaters from './../components/theaters.vue';
  import { fetchMovie } from './../vuex/actions';
  import { getMovie } from './../vuex/getters';
  export default {
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
    },
    components: {
      'vvMovie': theaters
    },
  }
</script>