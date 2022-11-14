<template>
  <div class="card__container">
    <div class="card__box">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewCard",
  props: ['title', 'subtitle'],
}
</script>

<style scoped>
.card__container{
  background-image: url("/src/assets/images/hero_1.jpg");
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center center;
  margin-bottom: 6rem;
}
.card__box {
  z-index: 2;
  background: #fff;
  padding: 4rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 500px;
  text-align: center;
}

.card__box h1 {
  font-family: "Allrounder Grotesk Regular";
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #364d59;
}

.card__box p {
  line-height: 1.7;
  color: #364d59;
  margin-bottom: 3rem;
}
</style>