<template>
  <v-app>
    <TheNavbar/>
    <PreviewSlider/>
    <WelcomeSection/>
    <CardList/>
    <ProjectList/>
    <CaptionSlider/>
    <BlogCards/>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import PreviewSlider from "@/components/PreviewSlider";
import WelcomeSection from "@/components/WelcomeSection";
import CardList from "@/components/CardLIst";
import ProjectList from "@/components/ProjectList";
import CaptionSlider from "@/components/CaptionSlider";
import BlogCards from "@/components/BlogCards";
import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',

  components: {
    TheNavbar,
    PreviewSlider,
    WelcomeSection,
    CardList,
    ProjectList,
    CaptionSlider,
    BlogCards,
    TheFooter,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

@font-face {
  font-family: "Acumin Pro Regular";
  src: url("./assets/fonts/Acumin Pro Regular.woff2") format("woff2"); , :url("./assets/fonts/Acumin Pro Regular.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "AcuminPro-Medium";
  src: url("./assets/fonts/AcuminPro-Medium.woff2") format("woff2"); , :url("./assets/fonts/AcuminPro-Medium.woff") format("woff");
  font-weight: 300;
}

@font-face {
  font-family: "Allrounder Grotesk Regular";
  src: url("./assets/fonts/Allrounder Grotesk Regular.woff2") format("woff2"); , :url("./assets/fonts/Allrounder Grotesk Regular.woff") format("woff");
  font-weight: 300;
}

.theme--light.v-application {
  background: #d4d7dd;
}
.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.aas{
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
}



</style>
