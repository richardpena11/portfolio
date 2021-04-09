<template>
  <div>
    <h3 class="title" id="projects">
      {{ info.projects.title }}
    </h3>

    <comp-project
      v-for="(project, index) in info.projects.project"
      :key="index"
      :info="project"
    ></comp-project>

    <h3 class="title" id="skills">
      {{ info.skills.title }}
    </h3>

    <comp-skills :info="info.skills.skill"></comp-skills>

    <h3 class="title" id="contact">
      {{ info.contact.title }}
    </h3>

    <comp-contact
      :infoGeneral="infoGeneral"
      :info="info.contact"
    ></comp-contact>
  </div>
</template>

<script>
import CompProject from "./CompProject.vue";
import CompSkills from "./CompSkills.vue";
import CompContact from "./CompContact.vue";
export default {
  components: { CompProject, CompSkills, CompContact },
  props: ["info", "infoGeneral"]
};
</script>

<style lang="scss" scoped>
.title {
  padding: 50px 0;
  text-align: center;
  font-weight: 700;
  font-size: 38px;
  color: #66fcf1;
}
</style>
