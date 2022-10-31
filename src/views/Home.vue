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
import PreviewSlider from "@/components/Home/home-preview-slider";
import WelcomeSection from "@/components/Home/home-welcome-section";
import CardList from "@/components/Home/home-card-list";
import ProjectList from "@/components/Home/home-project-list";
// import CaptionSlider from "@/components/Home/home-caption-slider";
import BlogCards from "@/components/Home/home-blog-cards";

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