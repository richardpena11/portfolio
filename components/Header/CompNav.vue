<template>
  <nav class="navbar">
    <div @click="showMenu" class="burger">
      <v-icon>mdi-menu</v-icon>
    </div>

    <div class="links" ref="links">
      <span
        v-for="(item, index) in info.navbar"
        :key="index"
        @click="scrollToEl(item.link)"
      >
        {{ item.value }}

        <v-icon>mdi-{{ item.icon }}</v-icon>
      </span>
    </div>

    <div class="option">
      <v-icon @click="share"> mdi-share-variant </v-icon>

      <v-card class="share" v-show="dialog" dark>
        <v-card-title>
          {{ info.share.title }}
        </v-card-title>

        <v-card-text>
          <v-alert outlined type="success" color="#66fcf1">
            <span class="url" ref="url">{{ url }}</span>
          </v-alert>
        </v-card-text>

        <v-card-subtitle>{{ info.share.success }}</v-card-subtitle>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            {{ info.share.close }}
          </v-btn>
        </v-card-actions>
      </v-card>

      <div class="lang__switcher">
        <span>EN</span>

        <comp-switch></comp-switch>

        <span>ES</span>
      </div>
    </div>
  </nav>
</template>

<script>
import CompSwitch from "./CompSwitch.vue";

export default {
  components: { CompSwitch },
  data() {
    return {
      switch1: true,
      dialog: false,
      fab: false,
      width: 850,
      menu: "closed"
    };
  },

  methods: {
    share() {
      if (this.dialog) {
        this.dialog = false;
      } else {
        this.dialog = true;
        this.$copyText(this.url);
      }
    },

    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },

    showMenu() {
      if (this.menu === "closed") {
        this.menu = "open";
        this.$refs.links.style.display = "flex";
      } else {
        this.$refs.links.style.display = "none";
        this.menu = "closed";
      }
    },

    scrollToEl(el) {
      const element = document.getElementById(el);
      console.log(element);
      if (element) {
        element.scrollIntoView();
      } else {
        window.open(el);
      }
    }
  },

  computed: {
    url() {
      return "www.richardpenaweb.com";
    }
  },

  props: ["info"]
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .burger {
    display: none;
    .v-icon {
      color: #66fcf1;
      font-size: 28px;
      cursor: pointer;
    }
  }
  .links {
    span {
      font-family: "Montserrat", sans-serif;
      color: #66fcf1;
      font-size: 16px;
      padding: 0 10px;
      text-decoration: none;
      transition: all 0.5s;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 3px solid #fff;
      }
    }
    .v-icon {
      font-size: 16px;
      color: #66fcf1;
    }
  }

  .closed {
    display: none;
  }

  .open {
    display: flex;
  }

  .option {
    position: relative;
    width: 300px;
    display: flex;
    justify-content: flex-end;
    .v-icon {
      padding: 0 5px;
      margin: 0 10px;
      color: white;
      font-size: 22px;
      cursor: pointer;
      &:hover {
        font-size: 28px;
      }
    }
    .share {
      width: 300px;
      position: absolute;
      left: 0;
      top: 60px;
      .v-card__text {
        padding-bottom: 0;
        .url {
          padding: 0px 15px !important;
        }
      }
      .v-card__subtitle {
        text-align: center;
        padding-top: 0;
      }
    }
    .lang__switcher {
      display: flex;
      align-items: center;
      span {
        color: #66fcf1;
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .navbar {
      padding: 10px;
      .burger {
        .v-icon {
          font-size: 32px;
        }
      }
      .links {
        span {
          font-size: 18px;
          padding: 10px;
        }
        .v-icon {
          font-size: 20px;
        }
      }

      .option {
        .v-icon {
          padding: 0 5px;
          margin: 0 10px;
          color: white;
          font-size: 24px;
          cursor: pointer;
          &:hover {
            font-size: 32px;
          }
        }
        .lang__switcher {
          display: flex;
          align-items: center;
          span {
            color: #66fcf1;
            font-size: 18px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 861px) {
    .links {
      display: flex !important;
    }
  }

  @media screen and (max-width: 860px) {
    .burger {
      display: initial;
    }

    .links {
      display: none;
      position: absolute;
      background: #1e1e1e;
      z-index: 30;
      padding: 10px 20px;
      top: 80px;
      flex-direction: column;
      a {
        padding: 15px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .option {
      position: initial;
      .share {
        width: 100vh;
        position: fixed;
        z-index: 20;
        left: 0;
        top: initial;
        bottom: 0;
        .v-card__text {
          padding-bottom: 0;
          .url {
            padding: 0px 15px !important;
          }
        }
        .v-card__title {
          text-align: center;
        }
      }
    }
  }
}
</style>
