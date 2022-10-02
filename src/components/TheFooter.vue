<template>
  <v-footer
      color="primary lighten-1"
      padless
  >
        <v-row
        justify="center"
        no-gutters
    >

      <v-col
          class="py-4 text-center"

          cols="12"
          sm="4"
      >

          <v-btn
              v-for="link in links"
              :key="link"

              text
              rounded
              class="my-2"
          >
            {{ link }}
          </v-btn>



      </v-col>
          <v-col>
            About Us
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </v-col>
          <v-col>
            <form>
              <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
              ></v-text-field>

              <v-btn
                  class="mr-4"
                  @click="submit"
              >
                submit
              </v-btn>
            </form>
          </v-col>
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",

  data: () => ({
  links: [
  'Home',
  'About Us',
  'Team',
  'Services',
  'Blog',
  'Contact Us',
  ],
}),
}
</script>

<style scoped>

</style>



