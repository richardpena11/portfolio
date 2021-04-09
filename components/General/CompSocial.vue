<template>
  <div :class="`social social--${where}`">
    <a v-for="(social, index) in info" :key="index" class="social_link">
      <span v-if="social.action" @click="showDialog(social.link)">
        <v-icon> mdi-{{ social.icon }} </v-icon>
      </span>
      <a v-else :href="social.link" target="_blank">
        <v-icon> mdi-{{ social.icon }} </v-icon>
      </a>
    </a>

    <div class="dialog_container" ref="dialogContainer" v-if="dialog" @click="closeDialog">
      <v-card>
        <v-alert outlined color="#66fcf1">
          <span class="url">{{actualInfo}}</span>
        </v-alert>
      </v-card>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      actualInfo: ""
    };
  },

  props: ["where", "info"],

  methods: {
    showDialog(link) {
      this.actualInfo = link;
      this.dialog = true;
    },

    closeDialog(e){
      if(e.target === this.$refs.dialogContainer) {
        this.dialog = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.social {
  a {
    text-decoration: none;
    .v-icon {
      font-size: 50px;
      padding: 10px;
      color: white;
      &:hover {
        color: #66fcf1;
      }
    }
  }
}

.dialog_container {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .v-card {
    background: #202833;
    width: 320px;
    height: 100px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    .v-alert {
      margin-bottom: 0;
      text-align: center;
      width: 100%;
      span {
        font-size: 18px;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .social.social--hero {
    a {
      .v-icon {
        font-size: 40px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .social.social--hero {
    a {
      .v-icon {
        padding: 5px;
        font-size: 35px;
      }
    }
  }

  .social.social--contact {
    a {
      .v-icon {
        padding: 5px;
        font-size: 40px;
      }
    }
  }
}
</style>
