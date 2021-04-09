<template>
  <div class="mouse_animation" v-scroll="onScroll" v-if="!fab">
    <v-icon class="mouse">mdi-mouse</v-icon>
    <v-icon class="arrow">mdi-chevron-down</v-icon>
  </div>

  <div class="mouse_to_top" v-scroll="onScroll" @click="toTop" v-else>
    <v-icon class="arrow">mdi-chevron-up</v-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false
    };
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
      this.returnIcon();
    },
    async returnIcon() {
      setTimeout(function() {
        this.fab = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.mouse_animation {
  position: fixed;
  // right: 50px;
  right: calc(50% - 16px);
  bottom: 10px;
  display: flex;
  flex-direction: column;
  .v-icon {
    color: white;
    font-size: 32px;
  }
  .arrow {
    animation-name: mouse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
}

.mouse_to_top {
  position: fixed;
  z-index: 10;
  right: 50px;
  bottom: 10px;
  padding: 12px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  .arrow {
    font-size: 40px;
    color: #202833;
  }
}

@keyframes mouse {
  0% {
    padding-bottom: 0px;
  }
  50% {
    padding-bottom: 10px;
  }
  100% {
    padding-bottom: 0px;
  }
}

@media screen and (max-width: 500px) {
  .mouse_animation {
    right: calc(50% - 12px);
    .v-icon {
      font-size: 26px;
    }
  }
}
</style>
