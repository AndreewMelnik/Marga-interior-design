<template>
  <div class="blog">
    <div class="container">
      <div class="text">
        <h3 class="text-uppercase">Blog and Updates</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quos veniam magni totam, architecto earum
          dolor id obcaecati!</p>
      </div>
      <v-card
          class="mx-auto"
          max-width="1140"
          background-color="#d4d7dd"
      >
        <v-container fluid>
          <v-row dense>
            <v-col
                v-for="card in paginatedData"
                :key="card.title"
                :cols=3
            >
              <v-card
                  max-width="255"
                  height="200"
                  class="d-flex flex-column align-left py-0 px-20 ml-3 mr-3 mb-9"
                  color="white"

              >
                <v-card-title v-text="card.title"></v-card-title>
                <v-card-subtitle v-text="card.body"></v-card-subtitle>
                <v-card-title><a href="#" class="read-more">Read More</a></v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <div class="text-center">
        <v-pagination
            v-model="pageNumber"
            :length="5"

            @input="nextPage"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlogCardsSection",

  data() {
    return {
      cards: [],
      pageNumber: 1,
      size: 16
    };
  },

  mounted() {
    // this.fetchTodo()
    this.$store.dispatch("fetchCards")
  },

  methods: {
    // fetchTodo() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/posts')
    //       .then(response => this.cards = response.data)
    // },
    nextPage(page) {
      this.pageNumber = page;
    }
  },
  computed: {
    paginatedData() {
      const start = this.pageNumber * this.size - this.size,
          end = start + this.size;
      return this.cards.slice(start, end);
    }
  }

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

.v-card__title {
  font-size: 1rem;
  padding: 16px 16px 0px 16px;;
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
.v-card__title{
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px;
  font-size: 14px;
  text-transform: uppercase;
}
.v-card__subtitle {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px;
  line-height: 1.6rem;
}
</style>