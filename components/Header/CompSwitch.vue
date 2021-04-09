<template>
  <div>
    <label class="switch">
      <input ref="langSwitcher" @change="changeLang" type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    changeLang() {
      let curLang = "en";
      if (this.$refs.langSwitcher.checked) {
        curLang = "es";
      } else {
        curLang = "en";
      }
      this.$store.commit("store/changeLang", curLang);
      console.log(this.$store.state.store.lang);
    }
  }
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 15px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    border: 2px solid #46a29f;
    background-color: transparent;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      border-radius: 50%;
      background-color: #66fcf1;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

@media screen and (max-width: 500px) {
  .switch {
    width: 45px;
    height: 25.5px;
    .slider {
      &:before {
        height: 16.5px;
        width: 16.5px;
        left: 3px;
        bottom: 3px;
      }
    }
  }
  input:checked + .slider:before {
  -webkit-transform: translateX(19.5px);
  -ms-transform: translateX(19.5px);
  transform: translateX(19.5px);
}
}
</style>
