<template>
  <v-card
      class="mx-auto"
      max-width="1140"
      background-color="#d4d7dd"
  >
    <div class="cards-title">
      <h2>WHAT WE DO</h2>
    </div>
    <v-container fluid>
      <v-row dense>
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
        >
          <v-card
              max-width="350"
              class="d-flex flex-column align-center py-10 px-20"
              color="white"
          >
            <img
                :src="card.src"
                class="white--text align-end"
                height="200px"/>


            <v-card-title v-text="card.title"></v-card-title>
            <v-card-subtitle> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in officia saepe veritatis?
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
      {title: 'Creative Stairs', src: stairs, flex: 4},
      {title: 'Kitchen Design', src: kitchen, flex: 4},
      {title: 'Lamp Decoration', src: lamp, flex: 4},
      {title: 'Interior Blueprint', src: interior, flex: 4},
      {title: 'Dinning Table', src: table, flex: 4},
      {title: 'Modern Design', src: pantone, flex: 4},
    ],
  }),
}
</script>

<style scoped>
.container {
  background-color: #d4d7dd;
  text-align: center;
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

img.white--text.align-end{
  max-width: 80px;
  max-height:80px
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


</style>