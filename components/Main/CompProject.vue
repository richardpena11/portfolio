<template>
  <div class="project">

      <v-carousel
        cycle
        hide-delimiter-background
        :show-arrows="false"
        height="100%"
      >
        <v-responsive :aspect-ratio="16/9">
          <v-carousel-item v-for="(imgUrl, i) in info.carousel" :key="i" contain :src="imgUrl">
          </v-carousel-item>
        </v-responsive>
      </v-carousel>
    

    <v-card>
      <v-card-title>
        <h4>
          {{ info.title }}
        </h4>
      </v-card-title>

      <div class="skils_container">
        <v-card-subtitle>{{ info.skills.title }}</v-card-subtitle>

        <v-card-text>
          <ul>
            <li v-for="(skill, index) in info.skills.skill" :key="index">
              {{ skill }}
            </li>
          </ul>
        </v-card-text>
      </div>

      <v-card-actions>
        <v-btn
          :href="info.action.preview.link"
          target="_blank"
          outlined
          block
          >{{ info.action.preview.content }}</v-btn
        >
        <v-btn :href="info.action.code.link" target="_blank" outlined block>
          {{ info.action.code.content }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 200px;
  display: flex;
  flex-direction: row-reverse;

  .v-carousel {
    width: 80%;
    margin-left: auto;
    border-radius: 12px;
  }

  .v-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    top: 150px;
    left: 50px;
    width: 28%;
    background: #202833;
    border-radius: 12px;

    &__title {
      margin: 10px;
      display: flex;
      justify-content: center;
      color: #66fcf1;
      font-size: 28px;
    }

    &__subtitle {
      margin: 5px;
      display: flex;
      justify-content: center;
      color: white !important;
      font-size: 24px;
      font-weight: 500;
    }

    &__text {
      ul {
        li {
          margin: 5px;
          padding: 5px;
          font-size: 20px;
          text-align: center;
          color: white;
          list-style: none;
        }
      }
    }

    &__actions {
      padding: 10px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      a {
        width: 100%;
        font-size: 18px;
        margin: 10px 0;
        padding: 20px;
        color: #66fcf1;
        background: transparent;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .project {
    .v-carousel {
      width: 70%;
    }

    .v-card {
      top: 100px;
      left: 30px;
      width: 35%;

      &__title {
        font-size: 24px;
      }

      &__subtitle {
        font-size: 20px;
      }

      &__text {
        ul {
          li {
            font-size: 18px;
          }
        }
      }

      &__actions {
        a {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .project {
    margin-bottom: 25px;
    flex-direction: column;
    align-items: center;

    .v-carousel {
      width: 100%;
      :last-child {
        top: 0;
      }
    }

    .v-card {
      position: relative;
      top: -50px;
      left: initial;
      min-width: 250px;
      width: 60%;
    }
  }
}

@media screen and (max-width: 500px) {
  .project {
    .v-card {
      top: -15px;
    }
  }
}
</style>
