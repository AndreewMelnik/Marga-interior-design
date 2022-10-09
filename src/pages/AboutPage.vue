<template>
<v-app>
  <preview-card
      title="ABOUT US"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."/>
  <story-section/>
  <team-cards/>
</v-app>

</template>

<script>
import PreviewCard from "@/components/PreviewCard";
import StorySection from "@/components/StorySection";
import TeamCards from "@/components/TeamCards";
export default {
  name: "AboutPage",
  components: {TeamCards, StorySection, PreviewCard}
}
</script>

<style scoped>

</style>