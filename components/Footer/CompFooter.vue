<template>
  <div class="footer">
    <div class="personal">
      <h4>{{ info.personal }}</h4>
    </div>

    <div class="roles">
      <h4>{{ info.roles.name }}</h4>

      <ul>
        <li v-for="(role, index) in info.roles.role" :key="index">
          <span>{{ role.title }}</span>
          <span>{{ role.skill }}</span>
        </li>
      </ul>
    </div>

    <div class="key_skills">
      <h4>{{ info.keySkills.name }}</h4>

      <ul>
        <li v-for="(keySkill, index) in info.keySkills.keySkill" :key="index">
          {{keySkill}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 50px 150px;
  background: rgba($color: #1e1e1e, $alpha: 0.9);
  color: white;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  h4 {
    font-size: 24px;
  }
  ul {
    list-style: none;
    li {
      font-size: 18px;
      margin: 10px 0;
    }
  }
  .personal {
    width: 18%;
    h4 {
      font-size: 28px;
    }
  }
  .roles {
    max-width: 500px;
    width: 35%;
    ul {
      li {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .key_skills {
    width: 25%;
  }
}

@media screen and (max-width: 1400px) {
  .footer {
    padding: 50px 75px;
    .personal {
      padding-top: 20px;
      padding-bottom: 40px;
      text-align: center;
      min-width: 100%;
      h4 {
        font-size: 36px !important;
      }
    }
    .roles {
      padding: 0 10px;
      max-width: initial;
      width: 60% !important;
    }
    .key_skills {
      padding: 0 30px;
      width: 40% !important;
    }
  }
}

@media screen and (max-width: 800px) {
  .footer {
    padding: 50px 25px;
    flex-direction: column;
    align-items: center;
    > div {
      padding-bottom: 40px !important;
    }
    .roles {
      max-width: 500px;
      padding: 0;
      width: 95% !important;
    }
    .key_skills {
      max-width: 500px;
      padding: 0;
      width: 95% !important;
    }
  }
}

@media screen and (max-width: 430px) {
  .footer {
    padding: 50px 25px;
    flex-direction: column;
    align-items: center;
    > div {
      padding-bottom: 40px !important;
    }
    h4 {
      text-align: center;
    }
    ul {
      li {
        text-align: center;
      }
    }
    .roles {
      max-width: 500px;
      padding: 0;
      width: 95% !important;
      ul {
        li {
          margin: 15px 0;
          flex-direction: column;
        }
      }
    }
    .key_skills {
      max-width: 500px;
      padding: 0;
      width: 95% !important;
    }
  }
}
</style>
