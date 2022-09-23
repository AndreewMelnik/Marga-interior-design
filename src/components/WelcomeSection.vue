<template>
  <div class="welcome">
    <div class="container">
        <div class="welcome-items">
          <div class="welcome-box">
            <h2>Welcome To <br> Our Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia id ea ab in! Nam eligendi distinctio, vitae.</p>
            <p>Alias odit ipsam quas unde obcaecati molestiae consequatur numquam cupiditate perferendis facere, nulla nemo id, accusantium corrupti tempora.</p>
            <p class="welcome-sign">
              <span class="welcome__sign-name">Bruce Smith</span>
              <span class="welcome__sign-sign">Founder, CEO</span>
              <img src="../assets/images/signature.svg" alt="Image">
            </p>
          </div>
          <WelcomeSlider/>
        </div>
    </div>
  </div>
</template>

<script>
import WelcomeSlider from "@/components/WelcomeSlider";

export default {
  name: "WelcomeSection",

  components: {
    WelcomeSlider,
  },
}

</script>

<style scoped>
.welcome-box{
  background: #fff;
  position: relative;
  z-index: 2;
  margin-right: -60px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 4rem;
  height: 100%;
  line-height: 1.7;
  color: #364d59 ;
  font-weight: 300;
  font-size: 1rem;
  max-width: 33%;
}
welcome-box p{
  line-height: 1.7;
  color: #364d59;
  margin-bottom: 3rem;
}

.welcome-sign img{
  max-width: 100%;
}


</style>