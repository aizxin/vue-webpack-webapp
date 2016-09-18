<template>	
	<router-view></router-view>
	<vue-footer></vue-footer>
</template>

<style lang="sass">
	@import './assets/frozen/css/frozen.css';
	@import './assets/app.scss';
</style>
<script>
import vueFooter from './components/footer.vue';
import store from './vuex/store';
export default {
  components: {
    'vueFooter': vueFooter
  },
  store
}
</script>