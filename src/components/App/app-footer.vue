<template>
  <v-footer
      color="#c9ccd4"
      class="pt-5 pb-5"
  >
    <v-container
        class="pa-10">
      <div class="row">
        <v-col class="about">
          <h3>About Us </h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts.
          <p/>
        </v-col>
        <v-col
            class="text-left"
            cols="12"
            sm="1"
        >
          <h3 class="features">
            Features
          </h3>
          <v-list-item
              class="footer-link"
              v-for="link in links"
              :key="link.name"
              :to="link.path"
              text
              rounded
              color="rgba(0, 0, 0, 0.5)"
          >
            {{link.name}}
          </v-list-item>
        </v-col>

        <form class="flex flex-wrap">
          <h3 class="footer-heading mb-6">Subscribe to Newsletter</h3>
          <v-toolbar class="rounded-sm pa-0 mb-6" >
                <v-text-field
                    class="pt-5"
                    background-color="white"
                    v-model="email"
                    :error-messages="emailErrors"
                    label="Enter E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>

                <v-btn
                    class="btn"
                    height="64px"
                    width="125px"
                    color="#43ab92"
                    @click="submit"
                >
                  Subscribe
                </v-btn>
          </v-toolbar>
          <v-card
              color="rgba(201,204,212)"
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
                {{icon}}
              </v-icon>
            </v-btn>
          </v-card>
        </form>

      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",

  data: () => ({
      links: [
        {name: 'About Us', path: '/about', },
        {name: 'Projects', path: 'projects', },
        {name: 'Services', path: '/services', },
        {name: 'Blog', path: '/blog', },
        {name: 'Contact Us', path: '/contact', }
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
  line-height: 1.7;
  width: 247px;
}

.row{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  column-gap: 160px;
}
.features {
  padding-bottom: 10px;
}

v-text-field {
  color: white;
  max-width: 250px;
}
.btn {
  left: 20px;
  border-radius:2px;
}
header{
  width:410px;
}
.v-input.theme--light.v-text-field.v-text-field--is-booted {
  max-width: 250px;
}
.footer-link{
  width:115px;
  color: gray !important;
  font-size: 16px;
  font-family: "Acumin Pro Regular";
  padding-left: 0;
  min-height: 40px;
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


