<template>
  <v-app>
    <preview-card
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."
        title="BLOG POSTS"/>
    <blog-cards-section/>
  </v-app>
</template>

<script>
import PreviewCard from "@/components/Blog/blog-preview-card";
import BlogCardsSection from "@/components/Blog/blog-card-section";

export default {
  name: "BlogPage",
  components: {BlogCardsSection, PreviewCard}
}
</script>

<style scoped>

</style>