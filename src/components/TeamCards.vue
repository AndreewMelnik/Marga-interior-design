<template>
  <v-container>

    <v-row justify="center">
      <div class="text">
        <h2>Meet Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis provident eius ratione velit, voluptas laborum nemo quas ad necessitatibus placeat?</p>
      </div>

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

          <div class="title">Founder</div>
          <v-card-title v-text="card.title"></v-card-title>
          <v-card-subtitle v-text="card.subtitle" >
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import person_1 from "@/assets/images/person_1.jpg"
import person_2 from "@/assets/images/person_2.jpg"
import person_3 from "@/assets/images/person_3.jpg"
import person_4 from "@/assets/images/person_4.jpg"
import person_5 from "@/assets/images/person_5.jpg"

export default {
  name: "TeamCards",

  data: () => ({
    cards: [
      {title: 'James Doe', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.', src: person_1, flex: 4},
      {title: 'James Doe', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.', src: person_2, flex: 4},
      {title: 'James Doe', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.', src: person_3, flex: 4},
      {title: 'James Doe', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.', src: person_4, flex: 4},
      {title: 'James Doe', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.', src: person_5, flex: 4},
      {title: 'James Doe', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.', src: person_1, flex: 4},
    ],
  }),
}

</script>

<style scoped>
.text{
  margin-top: 7rem;
  text-align: center;
  max-width: 50%;
  margin: 200px 100px 50px 100px
}
.text h2{
  font-family: "AcuminPro-Medium";
  line-height: 1.2;
  color: #000;
  margin-bottom: 30px;
  font-size: 22px;

}
.text p{
  line-height: 1.7;
  color: #364d59;
  font-family: "AcuminPro-Medium";
  font-size: 18px;
}
.title{
  color: #ccc;
  margin-top: 10px;
  display: block;
  font-size: 14px !important;
  font-weight: 300;
}
.v-card__subtitle{
  text-align: center;
}
</style>