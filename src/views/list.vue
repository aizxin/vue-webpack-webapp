<template>
    <vue-header left="back" :title="title" right="search"></vue-header>
    <section class="ui-container">
    <div class="page" v-if="load" transition="fade">
      <section v-if="load" class="ui-panel">
        <ul class="ui-list ui-list-link ui-border-tb list-one">
            <li class="ui-border-t" v-for="vo in list">
                <div class="ui-list-img">
                    <img alt="{{vo.title}}" :src="vo.images.large">
                </div>
                <div class="ui-list-info">
                    <h4 class="ui-nowrap">{{vo.title}}</h4>
                    <p class="ui-nowrap">
                      <vue-star :score="5"></vue-star>
                    </p>
                    <p class="ui-nowrap">{{vo.genres.join(' ')}}</p>
                    <p class="ui-nowrap">
                      <span v-for="cast in vo.casts">{{cast.name}} </span>
                    </p>
                </div>
            </li>
          </ul>
        </section>
      </div>
    <loading :show="!load"></loading>
    </section>
    <div style="heigth:50px"></div>
</template>

<script>
  "use strict";
  import vueHeader from './../components/header.vue';
  import vueStar from './../components/star.vue';
  import loading from './../components/loading.vue';
  import { listMovie } from './../vuex/actions';
  import { getListMovie,getTitle,getIintLoding } from './../vuex/getters';
  export default {
    data () {
      return {
        page: 1,
        count: 10,
        type:'',
      }
    },
    vuex: {
      actions: {
        listMovie
      },
      getters: {
        list:getListMovie,
        title: getTitle,
        load: getIintLoding,
      },
    },
    route: {
      data ({ to: { params: { type = 'all', }}}) {
        this.type = type;
        this.listMovie(type,{count: this.count,start: (this.page - 1) * this.count,page:this.page});
          //滚动加载
          window.addEventListener('scroll', this.scroll)
        },
        deactivate (transition) {
          // 移除前删除对滚动事件
          window.removeEventListener('scroll', this.scroll)
          transition.next()
        }
    },
    methods:{
      // 监听网页滚动到底部
      scroll (e) {
        if(document.body.scrollHeight - window.screen.height - document.body.scrollTop <= 20) {
          this.page++;
          this.listMovie(this.type,{count: this.count,start: (this.page - 1) * this.count,page:this.page});
        }
      },
    },
    components: {
      'vueHeader':vueHeader,
      'vueStar':vueStar,
      'loading':loading
    },
  }
</script>