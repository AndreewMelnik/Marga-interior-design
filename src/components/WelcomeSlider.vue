<template>
  <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
    >
      <v-row
          class="fill-height"
          align="center"
          justify="center"
      >
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "WelcomeSlider",

  inject: ['isScrollable', 'isMobile'],
  data() {
    return {
      slides: [
        {
          src: require("../assets/images/about_1.jpg"),
        },
        {
          src: require("../assets/images/about_2.jpg"),
        },
        {
          src: require("../assets/images/about_3.jpg"),
        }
      ]
    }
  },
}

</script>

<style scoped>
.v-window__container {
  width: 700px
}
</style>