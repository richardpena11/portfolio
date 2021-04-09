<template>
  <header>
    <comp-nav :info="info.nav"></comp-nav>

    <comp-hero :infoGeneral="infoGeneral" :info="info.hero"></comp-hero>
  </header>
</template>

<script>
import CompNav from './CompNav.vue'
import CompHero from './CompHero.vue'

export default {
  components: { CompNav, CompHero  },
  props:[
    "info",
    "infoGeneral"
  ]
}
</script>

<style scoped>
  header {
    padding: 20px 0;
    height: 100vh;
  }

  .info {
    font-size: 24px;
    color: #fff;
  }
</style>