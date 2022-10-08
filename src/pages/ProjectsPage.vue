<template>
<v-app>
  <preview-card
      title="OUR PROJECTS"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."/>
  <ProjectList/>
  <ProjectList/>
</v-app>
</template>

<script>
import PreviewCard from "@/components/PreviewCard";
import ProjectList from "@/components/ProjectList";
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
.spacer{
  margin-top: 7rem;
}

/*.projects-title h2{*/
/*  display:none;*/
/*}*/
</style>