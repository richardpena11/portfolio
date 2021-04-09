<template>
  <div class="app">

    <div class="container">
      <comp-header :infoGeneral="info.general" :info="info.header" />

      <comp-main :infoGeneral="info.general" :info="info.main"></comp-main>
    </div>

    <comp-footer :info="info.footer"></comp-footer>

    <comp-mouse></comp-mouse>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CompHeader from '~/components/Header/CompHeader.vue';
  import CompMain from '~/components/Main/CompMain.vue';
  import CompFooter from '~/components/Footer/CompFooter.vue';
  import CompMouse from '~/components/General/CompMouse.vue';


  export default Vue.extend({
    components: { CompMain, CompHeader, CompFooter, CompMouse },

    data () {
      return {
        dialog: false,
      }
    },

    computed: {
      lang() {
        return this.$store.state.store.lang;
      }, 

      info() {
        if(this.lang === 'en'){
          return this.doc.en
        } 
        return this.doc.es
      }
    },
    

    async asyncData({$content}) {

      const doc = await $content("index").fetch();
      return {doc};
    }
  })
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    background: url("~assets/bg.jpeg");
    background-size: 100% 150%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    scroll-behavior: smooth;
  }

  body {
    background: rgba(0, 0, 0, .7);
  }

  .app {
    position: relative;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    padding: 0;
    margin: 0 auto;
  }
</style>

