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
import PreviewCard from "@/components/Services/services-preview-card";
import CardList from "@/components/Services/services-card-list";
import CaptionSlider from "@/components/Services/services-caption-slider";
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