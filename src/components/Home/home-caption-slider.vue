<template>
  <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
    >
      <caption-slider-item
          :position="slide.position"
          :sign="slide.sign"
          :title="slide.title"
      />
      <v-row
          align="center"
          class="fill-height"
          justify="center"
      >
      </v-row>
    </v-carousel-item>
    <div class="slider__box">
      <h1>Design That Makes You Feel At Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt.</p>
      <p><a class="btn" href="#">Contact Us</a></p>
    </div>
  </v-carousel>
</template>


<script>
import CaptionSliderItem from "@/components/Home/home-caption-slider-item";

export default {
  name: "CaptionSlider",
  components: {CaptionSliderItem},
  inject: ['isScrollable', 'isMobile'],
  data() {
    return {
      slides: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere, eos?',
          sign: 'Mike Dorney',
          position: 'CEO and Co-Founder',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea sunt, eos?',
          sign: 'Jack Dorney',
          position: 'Co-Founder',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea, eos?',
          sign: 'John Dorney',
          position: 'CEO',
        },
      ]
    }
  },
}
</script>

<style scoped>
.v-window.v-item-group.theme--dark.v-window--show-arrows-on-hover.v-carousel.v-carousel--hide-delimiter-background {
  padding: 100px 0 100px 0;
}
</style>