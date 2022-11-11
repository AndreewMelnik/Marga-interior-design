<template>
  <v-card
      class="projects"
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
              max-width="540"
          >
            <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"

            ></v-img>
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-subtitle> Melbourne, Australia
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ProjectList",

  data: () => ({
    cards: [
      {title: 'Creative Stairs', src: require ('../../assets/images/img_1.jpg'), flex: 6},
      {title: 'Kitchen Design', src: require ( '../../assets/images/img_2.jpg'), flex: 6},
      {title: 'Lamp Decoration', src: require ( '../../assets/images/img_3.jpg'), flex: 6},
      {title: 'Interior Blueprint', src: require ( '../../assets/images/img_4.jpg'), flex: 6},

    ],
  }),
}
</script>

<style scoped>

.projects.v-card.v-sheet.theme--light{
  margin: 0 auto;
}
.container {
  background-color: #d4d7dd;
  text-align: center;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  margin-bottom: 20px;
  box-shadow: none;
}

.v-card__title {
  margin-top: 30px;
  padding:0px
}

.v-card__subtitle {
  margin-top: 10px;
  padding: 0px;
  text-align: left;
}

.col.col-6{
  justify-content: center;
  display: flex;
  padding-bottom: 40px;
}

.theme--light.v-card{
  background-color: #d4d7dd;
}

.v-image{
  transition: all 0.5s ease-in-out;
}
.v-image:hover{
  transform: translateY(-25px);
}
</style>