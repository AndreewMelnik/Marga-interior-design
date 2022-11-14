<template>
  <v-app>
    <preview-card
        title="OUR SERVICES"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."/>
    <CardList/>
    <CaptionSlider/>
  </v-app>

</template>

<script>
import PreviewCard from "@/components/PreviewCard";
import CardList from "@/components/CardLIst";
import CaptionSlider from "@/components/CaptionSlider";
export default {
  name: "ServicesPage",

  components: {
    CaptionSlider,
    CardList,
    PreviewCard,
  },}

</script>

<style scoped>

</style>