<template>
  <v-app>
    <PreviewSlider/>
    <WelcomeSection/>
    <CardList/>
    <div class="projects-title">
      <h2>OUR PROJECTS</h2>
    </div>
    <ProjectList/>
<!--    <CaptionSlider/>-->
    <BlogCards/>
  </v-app>

</template>

<script>
import PreviewSlider from "@/components/PreviewSlider";
import WelcomeSection from "@/components/WelcomeSection";
import CardList from "@/components/CardLIst";
import ProjectList from "@/components/ProjectList";
// import CaptionSlider from "@/components/CaptionSlider";
import BlogCards from "@/components/BlogCards";

export default {
  name: "HomePage",

  components: {
    PreviewSlider,
    WelcomeSection,
    CardList,
    ProjectList,
    // CaptionSlider,
    BlogCards,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.projects-title {
  font-size: 13px;
  background-color: #d4d7dd;
  padding: 20px;
  font-family: "AcuminPro-Medium";
  margin-left: 200px;
}
</style>