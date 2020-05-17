<template>
  <div id="app">

    <compHeader/>

    <main>

      <compSummary/>

      <compProjects/>

      <compSkills/>

    </main>

    <compFooter/>

  </div>
</template>

<script>
import compHeader from './components/Header-Footer/Header.vue'
import compFooter from './components/Header-Footer/Footer.vue'
import compSummary from './components/Summary/Index.vue'
import compProjects from './components/Projects/Index.vue'
import compSkills from './components/Skills/Index.vue'

export default {
  name: 'App',
  components: {
    compHeader,
    compFooter,
    compSummary,
    compProjects,
    compSkills
  },

  // mounted() {
  //   window.addEventListener('click', e => {
  //     console.log(e.target)
  //   })
  // },
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*{
  scroll-behavior: smooth;
}

body{
  background: url('./assets/so-white.png');
}

.container{
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.section {
    font-family: "Open Sans", sans-serif;
}

.section_title{
  padding: 10px 0px;
  margin-bottom: 50px;
  font-size: 30px;
  text-align: center;
  color: #634975;
}

.section_title h3{
    font-weight: 300;
}

</style>
