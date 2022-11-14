<template>
  <v-app>
    <TheNavbar/>
    <router-view/>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheNavbar from "@/components/App/app-navbar";
import TheFooter from "@/components/App/app-footer";

export default {
  name: 'App',

  components: {
    TheNavbar,
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



</style>
