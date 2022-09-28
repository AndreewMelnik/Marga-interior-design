<template>
  <v-card
      class="mx-auto"
      max-width="1140"
      background-color="#d4d7dd"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
        >
          <v-card
              max-width="350"
          >
            <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
            >    </v-img>
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "CardList",

  data: () => ({
  cards: [
{ title: 'Creative Stairs', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
{ title: 'Kitchen Design', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
{ title: 'Lamp Decoration', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
{ title: 'Interior Blueprint', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
{ title: 'Dinning Table', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
{ title: 'Modern Design', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
  ],
}),
}
</script>

<style scoped>
.container {
  background-color: #d4d7dd;
  text-align: center !important;
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  margin-bottom: 20px;
  box-shadow: none;
}
.v-card__title{
margin-top: 10px;
  justify-content: center;
}
.v-card__subtitle{
  margin-top: 10px;
  padding-bottom: 20px;
  text-align: center;

}

</style>