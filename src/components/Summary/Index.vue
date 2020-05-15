<template>
  <section class="container section summary" id="summary">

      <div class="section_title">
        <h3>Summary</h3>
      </div>

      <div class="content">
        <p>Dedicated Front-End Web Developer with knowledge of <span class="highlight">modern JavaScript</span> programming and frameworks like <span class="highlight">Vue.js</span> and <span class="highlight">jQuery</span>. Also, abilities in page layout including CSS preprocessor (<span class="highlight">Sass</span>) and the most popular CSS framework <span class="highlight">Bootstrap</span>.</p>
      </div>

  </section>
</template>

<script>
export default {

}
</script>

<style>

.summary{
  padding: 50px 100px !important;
}

.summary .content{
    line-height: 37px;
    font-size: 20px;
    text-align: justify;
}

.summary .highlight{
    color: #9561BA;
    font-weight: 700;
}

@media screen and (max-width: 1000px){
  .summary{
    padding: 50px 70px !important;
  }
}

@media screen and (max-width: 600px){
  .summary{
    padding: 50px 30px !important;
  }
}

</style>