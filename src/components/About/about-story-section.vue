<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <div class="story">
          <h2>COMPANY STORY</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, consequuntur, harum? Culpa, iure vel fugiat
            veritatis obcaecati architecto.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut at quisquam, perferendis dolores fuga
            nulla ratione eveniet ipsam, blanditiis repellendus porro. Voluptatem tempore ratione ut ipsa et
            deleniti!</p>
          <p>Veniam officiis ad doloribus nostrum, id, excepturi. Quam aliquam, explicabo non dolorem eveniet similique!
            Veritatis necessitatibus ipsa eligendi distinctio suscipit magnam quos itaque, numquam sequi. Ipsa eveniet
            consectetur deleniti.</p>
          <p>Enim laudantium, perferendis distinctio! Natus ex, ad quisquam nemo inventore, saepe eveniet temporibus
            debitis magni ea. Corporis illo necessitatibus, error laboriosam voluptatum nostrum id at adipisci
            repellendus, quod explicabo?</p>
        </div>
      </v-col>
      <v-col cols="6">
        <img alt="Image" height="530px" src="../../assets/images/about_1.jpg" width="540px">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StorySection"
}
</script>

<style scoped>
.story h2 {
  font-family: "AcuminPro-Medium";
  line-height: 1.2;
  color: #000;
  margin-bottom: 30px;
  font-size: 22px;

}

.story p {
  line-height: 1.7;
  color: #364d59;
  font-family: "AcuminPro-Medium";
  max-width: 485px;
  font-size: 18px;
}
</style>