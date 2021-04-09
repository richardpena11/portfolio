<template>
  <div class="skills">
    <v-icon v-for="(skill, index) in info" :key="index">
      mdi-{{skill}}
    </v-icon>
  </div>
</template>

<script>
  export default {
    props: [
      "info"
    ]
  }
</script>

<style lang="scss" scoped>
.skills {
  margin: 0 auto;
  padding-bottom: 100px;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  .v-icon {
    font-size: 96px;
    color: rgb(230, 230, 230);
    &:hover {
      color: rgb(255, 255, 255);
    }
  }
}

@media screen and (max-width: 700px) {
  .skills {
    flex-wrap: wrap;
    .v-icon {
      padding: 0 10px;
      font-size: 72px;
    }
  }
}
</style>