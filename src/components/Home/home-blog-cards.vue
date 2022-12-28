<template>
  <div class="blog">
    <div class="container">
      <div class="text">
        <h3 class="text-uppercase">Blog and Updates</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quos veniam magni totam, architecto earum
          dolor id obcaecati!</p>
      </div>
      <v-card
          background-color="#d4d7dd"
          class="mx-auto"
          max-width="1140"
      >
        <v-container fluid>
          <v-row dense>
            <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
            >
              <v-card
                  class="d-flex flex-column align-left py-0 px-20 ml-3 mr-3"
                  color="white"
                  height="200"
                  max-width="255"

              >
                <v-card-subtitle v-text="card.published"></v-card-subtitle>
                <v-card-title v-text="card.description"></v-card-title>
                <v-card-title><a class="read-more" href="#">Read More </a></v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>


export default {
  name: "BlogCards",

  data: () => ({
    cards: [
      {published: 'Septermber 30, 2019', description: 'Lorem ipsum dolor sit amet, consectetur est!', flex: 3},
      {published: 'Septermber 30, 2019', description: 'Lorem ipsum dolor sit amet, consectetur est!', flex: 3},
      {published: 'Septermber 30, 2019', description: 'Lorem ipsum dolor sit amet, consectetur est!', flex: 3},
      {published: 'Septermber 30, 2019', description: 'Lorem ipsum dolor sit amet, consectetur est!', flex: 3},
    ],
  }),
}
</script>

<style scoped>
.container {
  padding: 0px;
  margin-bottom: 7rem;
}

.text {
  padding: 34px;
}

.mx-auto.v-card.v-sheet.theme--light {
  box-shadow: none;
  background-color: #d4d7dd
}

.text-uppercase {
  font-family: "AcuminPro-Medium";
  margin-bottom: 30px;
}

p {
  max-width: 650px;
  color: rgba(0, 0, 0, 0.6);
}

.read-more {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  padding-right: 20px;
  color: #000;
  text-decoration: none;
}

.read-more:hover {
  color: #43ab92 !important;
}

.v-card__title {
  display: block;
  /*white-space: nowrap;*/
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 13px;
  font-size: 14px;
  /*text-transform: uppercase;*/
}

.v-card__subtitle {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px;
  line-height: 1.6rem;
}

</style>