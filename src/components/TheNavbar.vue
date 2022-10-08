27 lines (24 sloc) 646 Bytes
<template>
  <v-app-bar  class="navbar" color="white" height="100px">
<!--    <v-btn icon>-->
<!--      <v-icon >fas fa-dragon</v-icon>-->
<!--    </v-btn>-->

    <v-spacer></v-spacer>
    <v-btn><router-link to="/">Home</router-link></v-btn>
    <v-btn><router-link to="/projects">Projects</router-link></v-btn>
    <v-btn><router-link to="/services">Services</router-link></v-btn>
    <div class="logo">
      <span>marga</span>
    </div>
    <v-btn><router-link to="/about">About</router-link></v-btn>
    <v-btn><router-link to="/blog">Blog</router-link></v-btn>
    <v-btn><router-link to="/contact">Contact</router-link></v-btn>
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
  padding: 10px;
  max-height: 100px;
  height: 100px;
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