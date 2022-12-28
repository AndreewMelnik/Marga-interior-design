<template>
  <v-app>
    <preview-card
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."
        title="ABOUT US"/>
    <story-section/>
    <team-cards/>
  </v-app>

</template>

<script>
import PreviewCard from "@/components/About/about-preview-card";
import StorySection from "@/components/About/about-story-section";
import TeamCards from "@/components/About/about-team-cards";

export default {
  name: "AboutPage",
  components: {TeamCards, StorySection, PreviewCard}
}
</script>

<style scoped>

</style>