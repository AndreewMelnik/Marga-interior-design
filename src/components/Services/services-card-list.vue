<template>
  <v-card
      background-color="#d4d7dd"
      class="mx-auto"
      max-width="1140"
  >
    <div class="cards-title">
      <h2>WHAT WE DO</h2>
    </div>
    <v-container fluid>
      <v-row class="ma-3">
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            :data-aos-delay="card.delay"
            class="px-3"
            data-aos="fade-up"
            data-aos-duration="800"

        >
          <v-card
              class="d-flex flex-column align-center py-10 px-20"
              color="white"
              max-width="350"

          >
            <img
                :src="card.src"
                class="white--text align-end"
                height="200px"/>


            <v-card-title v-text="card.title"></v-card-title>
            <v-card-subtitle> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in officia saepe
              veritatis?
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import stairs from '../../assets/images/svg/stairs.png'
import kitchen from '../../assets/images/svg/kitchen.png'
import lamp from '../../assets/images/svg/lamp.png'
import interior from '../../assets/images/svg/interior.png'
import table from '../../assets/images/svg/table.png'
import pantone from '../../assets/images/svg/design.png'

export default {
  name: "CardList",

  data: () => ({
    cards: [
      {title: 'Creative Stairs', src: stairs, flex: 4, delay: 50},
      {title: 'Kitchen Design', src: kitchen, flex: 4, delay: 100},
      {title: 'Lamp Decoration', src: lamp, flex: 4, delay: 200},
      {title: 'Interior Blueprint', src: interior, flex: 4, delay: 50},
      {title: 'Dinning Table', src: table, flex: 4, delay: 100},
      {title: 'Modern Design', src: pantone, flex: 4, delay: 200},
    ],
  }),
}
</script>

<style scoped>
.container {
  background-color: #d4d7dd;
  text-align: center;
  padding: 2% 0 9% 0;
}

.cards-title {
  font-size: 13px;
  background-color: #d4d7dd;
  padding: 20px;
  font-family: "AcuminPro-Medium";
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  margin-bottom: 20px;
  box-shadow: none;
}

img.white--text.align-end {
  max-width: 80px;
  max-height: 80px
}

.v-card__title {
  margin-top: 10px;
  justify-content: center;
}

.v-card__subtitle {
  margin-top: 10px;
  padding-bottom: 20px;
  text-align: center;
}

[data-aos][data-aos][data-aos-duration="800"], body[data-aos-duration="800"] [data-aos] {
  transition-duration: .8s
}

[data-aos][data-aos][data-aos-delay="50"], body[data-aos-delay="50"] [data-aos] {
  transition-delay: 50ms
}

[data-aos][data-aos][data-aos-delay="100"], body[data-aos-delay="100"] [data-aos] {
  transition-delay: .1s
}

[data-aos][data-aos][data-aos-delay="200"].aos-animate, body[data-aos-delay="200"] [data-aos].aos-animate {
  transition-delay: .2s
}

[data-aos^=fade][data-aos^=fade] {
  opacity: 0;
  transition-property: opacity, transform
}

[data-aos^=fade][data-aos^=fade].aos-animate {
  opacity: 1;
  transform: translate(0)
}

[data-aos=fade-up] {
  transform: translateY(100px)
}

</style>