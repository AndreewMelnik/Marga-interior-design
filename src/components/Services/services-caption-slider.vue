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
        :title="slide.title"
        :sign="slide.sign"
        :position="slide.position"
      />
<!--      <v-row-->
<!--          class="fill-height"-->
<!--          align="center"-->
<!--          justify="center"-->
<!--        >-->
<!--      </v-row>-->
    </v-carousel-item>
    <div class="slider__box">
      <h1>Design That Makes You Feel At Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt.</p>
      <p><a href="#" class="btn">Contact Us</a></p>
    </div>
  </v-carousel>
</template>


<script>
import CaptionSliderItem from "@/components/Services/services-caption-slider-item";
export default {
  name: "CaptionSlider",
  components: {CaptionSliderItem},
  inject: ['isScrollable', 'isMobile'],
  data() {
    return {
      slides: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea sunt, eos?',
          sign: 'Mike Dorney',
          position: 'CEO and Co-Founder',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea sunt, eos?',
          sign: 'Mike Dorney',
          position: 'CEO and Co-Founder',
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus earum facere ex ea sunt, eos?',
          sign: 'Mike Dorney',
          position: 'CEO and Co-Founder',
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