<template>
  <v-app>
    <preview-card
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."
        title="OUR PROJECTS"/>
    <ProjectList/>
  </v-app>
</template>

<script>
import PreviewCard from "@/components/Projects/projects-preview-card";
import ProjectList from "@/components/Projects/project-list";

export default {
  name: "ProjectsPage",

  components: {
    ProjectList,
    PreviewCard,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.spacer {
  margin-top: 7rem;
}

/*.projects-title h2{*/
/*  display:none;*/
/*}*/
</style>