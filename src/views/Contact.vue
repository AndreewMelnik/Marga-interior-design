<template>
  <v-app>
    <preview-card
        title="CONTACT US"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."/>
    <contact-form/>
  </v-app>

</template>

<script>
import PreviewCard from "@/components/Contact/contact-preview-card";
import ContactForm from "@/components/Contact/contact-form";
export default {
  name: "ContactPage",
  components: {PreviewCard,ContactForm}
}
</script>

<style scoped>

</style>