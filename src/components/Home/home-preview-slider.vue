<template>
  <v-carousel
      cycle
      height="800"
      hide-delimiter-background
      show-arrows-on-hover
      @click="dialog = false"
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
    >
      <v-row
          align="center"
          class="fill-height"
          justify="center"
      >
      </v-row>
    </v-carousel-item>
    <div class="slider__box">
      <h1>Design That Makes You Feel At Home</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti, nesciunt.</p>

      <home-popup/>

    </div>
  </v-carousel>
</template>


<script>
import HomePopup from "@/components/Home/home-popup";

export default {
  name: "PreviewSlider",
  components: {HomePopup},
  inject: ['isScrollable', 'isMobile'],
  data() {
    return {
      slides: [
        {
          src: require("../../assets/images/hero_1.jpg"),
        },
        {
          src: require("../../assets/images/hero_2.jpg"),
        },
        {
          src: require("../../assets/images/hero_3.jpg"),
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

@media (max-width: 850px) {
  .slider__box {
    padding: 2.5rem;
    height: 410px
  }

  .slider__box h1 {
    font-size: 2rem;
  }

  .slider__box p {
    margin-bottom: 2rem;
  }
}

@media (max-width: 600px) {
  .slider__box {
    padding: 1.5rem;
    height: 350px
  }

  .slider__box h1 {
    font-size: 1.5rem;
  }

  .slider__box p {
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 470px) {
  .slider__box {
    padding: 1.5rem;
  }

  .slider__box h1 {
    font-size: 1.3rem;
  }

  .slider__box p {
    font-size: 13px;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
}
</style>