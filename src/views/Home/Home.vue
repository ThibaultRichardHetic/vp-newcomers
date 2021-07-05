<template>
  <div class="home">
    <Header/>
    <Carousel/>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/03_organisms/Header/Header.vue";
import Carousel from "@/components/03_organisms/Carousel/Carousel.vue";
import Footer from "@/components/03_organisms/Footer/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
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
