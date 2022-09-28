<template>
  <div class="welcome">
    <div class="container">
      <div class="welcome-items">
        <div class="welcome-box">
          <h2>Welcome To <br> Our Company</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia id ea ab in! Nam eligendi
            distinctio, vitae.</p>
          <p>Alias odit ipsam quas unde obcaecati molestiae consequatur numquam cupiditate perferendis facere, nulla
            nemo id, accusantium corrupti tempora.</p>
          <p class="welcome-sign">
            <span class="welcome__sign-name">Bruce Smith</span> <br/>
            <span class="welcome__sign-sign">Founder, CEO</span> <br/>
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
.welcome {
  padding: 9% 0;
}

.welcome-items {
  display: flex;
}

.welcome-box {
  background: #fff;
  position: relative;
  z-index: 2;
  margin-right: -60px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 64px;
  height: 730px;
  line-height: 1.7;
  color: #364d59;
  font-weight: 300;
  font-size: 1rem;
  max-width: 40%;
}

.welcome-box h2 {
  line-height: 1.2;
  color: #000;
  margin-bottom: 30px;

}

welcome-box p {
  line-height: 1.7;
  color: #364d59;
  margin-bottom: 3rem;
  font-family: "AcuminPro-Medium";
}

.welcome-sign {
  padding-top: 30px;
}

.welcome__sign-name {
  font-weight: 700;

}

.welcome__sign-sign {
  font-weight: 400;
}

.welcome-sign img {
  max-width: 140px;
}


</style>