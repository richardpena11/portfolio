<template>
  <div class="hero">
    <div class="title">
      <span>{{ info.greet }}</span>
      <h1>{{ info.title }}</h1>
      <h2>{{ info.subtitle }}</h2>
    </div>

    <comp-social :info="infoGeneral.social" where="hero"></comp-social>

    <div class="summary">
      <span
        v-for="(span, index) in info.summary"
        :key="index"
        :class="span.highlight ? 'highlight' : ''"
        >{{ span.content }}</span
      >
    </div>

  </div>
</template>

<script>
import CompSocial from "../General/CompSocial.vue";
export default {
  components: { CompSocial },
  props: [
    "info",
    "infoGeneral"
    ]
};
</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 74px);
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Montserrat", sans-serif;

  .title {
    > span {
      align-self: flex-start;
      font-weight: 700;
      font-size: 54px;
    }

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 110px;
      font-weight: 700;
      color: #66fcf1;
    }

    h2 {
      text-align: center;
      text-transform: capitalize;
      font-size: 54px;
      font-weight: 300;
      color: #66fcf1;
    }
  }

  .social {
    margin: 40px 0;
  }

  .summary {
    text-align: center;
    margin: 20px 0;
    font-weight: 300;
    font-size: 30px;
    .highlight {
      color: #66fcf1;
    }
  }
}

@media screen and (max-width: 1020px) {
  .hero {
    .title {
      > span {
        font-size: 38.5px;
      }

      h1 {
        font-size: 76px;
      }

      h2 {
        font-size: 38.5px;
      }
    }

    .summary {
      font-size: 22.5px;
    }
  }
}

@media screen and (max-width: 750px) {
  .hero {
    .title {
      > span {
        font-size: 24px;
      }

      h1 {
        font-size: 50px;
      }

      h2 {
        font-size: 24px;
      }
    }

    .summary {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 500px) {
  .hero {
    .title {
      > span {
        font-size: 20px;
      }

      h1 {
        font-size: 36px;
      }

      h2 {
        font-size: 20px;
      }
    }

    .summary {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 350px) {
  .hero {
    .title {
      > span {
        font-size: 20px;
      }

      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 18px;
      }
    }

    .summary {
      font-size: 16px;
    }
  }
}
</style>
