<template>
  <div class="container">
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
.title{

}
</style>