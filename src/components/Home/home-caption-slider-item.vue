<template>
  <div class="container">
    <span class="quote quote-icon-wrap">
     <img src="../../assets/images/svg/quotes.svg" alt=""/></span>
    <blockquote class="testimonial">
      <span class="quote quote-icon-wrap">
        <span class="icon-format_quote"></span>
      </span>
      <p class="title">{{ title }}</p>
      <cite>
        <span class="text-black">{{ sign }} </span> &mdash; <span class="text-muted">{{ position }}</span>
      </cite>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "CaptionSliderItem",
  props: ['title', 'sign', 'position'],
}
</script>

<style scoped>
.container{
  max-width: 1140px;
  text-align: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
blockquote{
  max-width: 620px;
  margin: 0 auto;
}
p{
  margin-top: 0;
  margin-bottom: 1rem;
}
img{
  max-width: 32px;
}
.title{
  font-size: 1.5rem!important;
  font-weight: 300;
  padding-bottom: 1rem;
}
cite{
  font-style: italic;
}
.text-muted{
  font-weight: 300;
}

</style>