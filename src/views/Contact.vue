<template>
  <v-app>
    <preview-card
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti similique, nesciunt."
        title="CONTACT US"/>
    <contact-form/>
  </v-app>

</template>

<script>
import PreviewCard from "@/components/Contact/contact-preview-card";
import ContactForm from "@/components/Contact/contact-form";

export default {
  name: "ContactPage",
  components: {PreviewCard, ContactForm}
}
</script>

<style scoped>

</style>