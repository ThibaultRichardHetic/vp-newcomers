<template>
  <div class="home">
    <Carousel/>
    <Footer/>
  </div>
</template>

<script>

import Carousel from "@/components/03_organisms/Carousel/Carousel.vue";
import Footer from "@/components/03_organisms/Footer/Footer.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Footer,
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
