<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col lg="8">
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
                cols="2"
                md="12"
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
                  class="mt-6"
                  @click="submit"
              >
                Send Message
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="4">
          <div class="contact__box">
            <h3>CONTACT INFO</h3>
            <ul class="contact__info">
              <li>
                <span class="contact__info-text">Address:</span><br>
                <span>34 Street Name, City Name Here, United States</span></li>
              <li>
                <span class="contact__info-text">Phone:</span><br>
                <span>+1 242 4942 290</span></li>
              <li>
                <span class="contact__info-text">Email:</span><br>
                <span>info@yourdomain.com</span></li>
            </ul>
          </div>
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

li{
  padding-bottom: 1rem;
}

.theme--light.v-btn{
  color:white
}

.contact__box {
  background-color: white;
  padding: 3rem;
  font-family: "Allrounder Grotesk Regular";
}

.contact__box h3{
  font-size: 20px;
  margin-bottom: 30px;
}

.contact__info{
  list-style-type: none;
  padding-left: 2px;
}

.contact__info-text{
  font-size: 80%;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
}


</style>

