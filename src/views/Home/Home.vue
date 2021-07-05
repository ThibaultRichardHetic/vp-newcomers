<template>
  <div class="home">
    <Carousel/>
  </div>
</template>

<script>

import Carousel from "@/components/03_organisms/Carousel/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
  data() {
    return {
      text: "VP test"
    };
  }
};
</script>

<style lang="scss">
@import "./Home.scss"
</style>
