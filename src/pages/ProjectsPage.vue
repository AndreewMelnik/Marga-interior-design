<template>
<v-app>
  <PreviewCard/>
  <div class="spacer"></div>
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