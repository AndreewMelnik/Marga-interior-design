<template>
<v-app>
  <preview-card
      title="BLOG POSTS"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."/>
  <blog-cards-section/>
</v-app>
</template>

<script>
import PreviewCard from "@/components/PreviewCard";
import BlogCardsSection from "@/components/BlogCardsSection";
export default {
  name: "BlogPage",
  components: {BlogCardsSection, PreviewCard}
}
</script>

<style scoped>

</style>