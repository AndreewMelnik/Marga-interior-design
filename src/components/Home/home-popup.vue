<template>
  <v-row justify="left">
    <v-dialog
        v-model="dialog"
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="popup__btn"
            dark
            left
            v-bind="attrs"
            v-on="on"

        >
          Contact Us
        </v-btn>
      </template>
      <v-form v-model="valid">
        <v-container>
          <div class="popup__text">Contact Us</div>
          <v-row class="popup__row">
            <v-row>
              <v-col md="6">
                <!--    delete below :counter="10"-->
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"

                    label="First name"
                    required
                ></v-text-field>
              </v-col>
              <v-col md="6">
                <!--      delete below :counter="10"-->
                <v-text-field
                    v-model="lastname"
                    :rules="nameRules"

                    label="Last name"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="12">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  class="fill-height 300"
                  md="12"
              >
                <v-textarea
                    v-model="message"
                    :rules="messageRules"
                    label="Write your message."
                    required
                ></v-textarea>
                <v-btn
                    class="mt-6"
                    color="#43ab92"
                    height="58"
                    width="380"
                    @click="submit"
                >
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-container>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "home-popup",
  data: () => ({
    dialog: false,
  }),
}

</script>

<style scoped>

.popup__btn {
  justify-content: left !important;
  color: #fff;
  background-color: #43ab92 !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid #43ab92 !important;
  padding: 0.375rem 0.75rem;
  margin: 0 12px;
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
}

.popup__text {
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 25px;
  color: #364d59;
  text-align: center;
  font-weight: 700;
}


.container {
  padding: 45px;
  background-color: #fffffff7;
  overflow: hidden;
}

.v-text-field {
  background-color: #ffffff1c;
  border-radius: 5px;
  margin: 4px;
  /*padding:16px;*/
}

li {
  padding-bottom: 1rem;
}

.theme--light.v-btn {
  color: white
}

.input-208 {
  line-height: 1.5rem;
}

@media (max-width: 470px) {
  .popup__btn {
    padding: 0 8px !important;
    height: 30px !important;
    font-size: 12px;
  }
}
</style>