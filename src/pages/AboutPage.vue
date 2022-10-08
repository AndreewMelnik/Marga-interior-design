<template>
<v-app>
  <preview-card
      title="ABOUT US"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."/>
  <story-section/>
</v-app>

</template>

<script>
import PreviewCard from "@/components/PreviewCard";
import StorySection from "@/components/StorySection";
export default {
  name: "AboutPage",
  components: {StorySection, PreviewCard}
}
</script>

<style scoped>

</style>