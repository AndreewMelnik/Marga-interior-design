<template>
  <v-carousel
      cycle
      height="800"
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
    <div class="slider__box">
      <h1>Design That Makes You Feel At Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt.</p>
      <p><a href="#" class="btn">Contact Us</a></p>
    </div>
  </v-carousel>
</template>
btn-primary

<script>
export default {
  name: "PreviewSlider",
  inject: ['isScrollable', 'isMobile'],
  data() {
    return {
      slides: [
        {
          src: require("../assets/images/hero_1.jpg"),
        },
        {
          src: require("../assets/images/hero_2.jpg"),
        },
        {
          src: require("../assets/images/hero_3.jpg"),
        }
      ]
    }
  },
}
</script>

<style scoped>
.slider__box {
  z-index: 2;
  background: #fff;
  padding: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  height: 455px
}

.slider__box h1 {
  font-family: "Allrounder Grotesk Regular";
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #364d59;
}

.slider__box p {
  line-height: 1.7;
  color: #364d59;
  margin-bottom: 3rem;
}

.btn {
  color: #fff;
  background-color: #43ab92;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid #43ab92;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
}

</style>