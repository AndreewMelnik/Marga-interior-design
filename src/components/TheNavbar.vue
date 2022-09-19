27 lines (24 sloc) 646 Bytes
<template>
  <v-app-bar  class="navbar" color="white">
<!--    <v-btn icon>-->
<!--      <v-icon >fas fa-dragon</v-icon>-->
<!--    </v-btn>-->

    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('project')">Projects</v-btn>
    <v-btn text @click="scroll('services')">Services</v-btn>
    <div class="logo">
      <span>marga</span>
    </div>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('blog')"> Blog</v-btn>
    <v-btn text @click="scroll('contact')"> Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.navbar{
display: flex;
  justify-content: center;
  padding: 20px;
  max-height: 100px;
}
.v-btn{
  text-transform: none;
  font-family: "AcuminPro-Medium";
}
.v-btn.v-size--default {
  font-size: 16px;
}
.logo{
  font-family: "Acumin Pro Regular";
  color:#43ab92;
  font-size: 32px;
  width:300px;
  text-align: center;
}
.logo span{
  vertical-align: super;
}

</style>