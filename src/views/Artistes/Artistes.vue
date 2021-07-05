<template>
  <div class="page--artistes">
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
  name: "Artistes",
  components: {
    Header,
    Carousel,
    Footer
  },
  data() {
    return {
      text: "Louis vuitton test",
    };
  }
};
</script>

<style lang="scss">
@import "./Artistes.scss"
</style>
