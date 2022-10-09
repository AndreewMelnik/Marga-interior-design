<template>
  <v-footer
      color="#c9ccd4"
      class="pt-5 pb-5"
  >
    <v-container
        class="pa-10">
      <v-row
          justify="center"
      >
        <v-col class="about">
          <h3>About Us </h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts.
          <p/>
        </v-col>
        <v-col
            class="py-4 text-center"
            cols="12"
            sm="1"
        >
          <h3 class="features">
            Features
          </h3>
          <v-btn
              v-for="link in links"
              :key="link"
              text
              rounded
              class="ml-16"
              color="rgba(0, 0, 0, 0.5)"

          >

            {{ link }}
          </v-btn>


        </v-col>

        <v-col class="py-4 text-left"
               cols="6"
               sm="1">

        </v-col>
        <form class="flex flex-wrap">
          <h3 class="footer-heading mb-4">Subscribe to Newsletter</h3>
          <v-text-field
              background-color="white"
              height="55px"
              v-model="email"
              :error-messages="emailErrors"
              label="Enter E-mail"
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
          <v-card
              color="rgba(201,204,212)"
              class=""
              flat
              tile
          >
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card>
        </form>

      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",

  data: () => ({
    links: [
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>
.about {
  font-size: 16px;
  padding-bottom: 20px;
  padding-top: 20px;
}

.about h3 {
  margin-bottom: 20px;
}

.about p {
  color: gray;
  margin-bottom: 20px;
}

.features {
  padding-left: 80px;
  padding-bottom: 10px;
}

v-text-field {
  color: white;
  max-width: 250px;
}

.v-input.theme--light.v-text-field.v-text-field--is-booted {
  max-width: 250px;
}

/*.v-input__slot{*/
/*  position: relative;*/
/*  flex: 1 1 auto;*/
/*  width: 1%;*/
/*  margin-bottom: 0;*/
/*  height: 55px;*/
/*  background-color: #fff ;*/
/*}*/
</style>


