<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <!--      delete below :counter="10"-->
          <v-text-field
              v-model="firstname"
              :rules="nameRules"

              label="First name"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
<!--      delete below :counter="10"-->
          <v-text-field
              v-model="lastname"
              :rules="nameRules"

              label="Last name"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="2"
            md="8"
        >
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>
        </v-col>
        <v-col
            cols="2"
            md="8"
            class="fill-height 300"
        >
          <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Write your message."
              required
          ></v-textarea>
          <v-btn
              color="#43ab92"
              width="380"
              height="58"
              class="mt-4"
              @click="submit"
          >
            Send Message
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => v.length >= 5 || 'Too short',
    ],
  }),
}
</script>

<style scoped>
.container{
  padding-bottom: 7rem;
}
.v-text-field{
  background-color: white;
  border-radius: 5px;
  /*margin:4px;*/
  padding:16px;
}

</style>