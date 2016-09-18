<template>
<div class="page" v-if="load" transition="fade">
<section class="ui-panel" v-for="item in movie | orderBy 'index'">
    <h2 class="ui-arrowlink" v-link="{name:'list', params: {type: item.name}}">{{item.title}}
      <span class="ui-panel-subtitle">{{item.total}}个</span>
    </h2>
    <ul class="ui-grid-trisect">
      <li v-for="vo in item.list">
        <div class="ui-grid-trisect-img">
          <img alt="{{vo.title}}" :src="vo.images.large">
          <p class="ui-nowrap">{{vo.title}}</p>
        </div>
      </li>
    </ul>
</section>
</div>
<loading :show="!load"></loading>
</template>
<script>
  "use strict";
  import { getIintLoding } from './../vuex/getters';
  import loading from './loading.vue';
  export default {
    props: ['movie'],
    vuex: {
      getters: {
        load: getIintLoding,
      },
    },
    components: {
      'loading': loading
    },
  }
</script>