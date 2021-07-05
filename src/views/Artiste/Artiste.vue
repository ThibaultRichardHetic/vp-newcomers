<template>
  <div class="page--artiste">
    <Hero home="1"/>
    <Carousel/>
    <Footer/>
  </div>
</template>

<script>
import Hero from "@/components/03_organisms/Hero/Hero.vue";
import Carousel from "@/components/03_organisms/Carousel/Carousel.vue";
import Footer from "@/components/03_organisms/Footer/Footer.vue";

import data_newcomers from "@/assets/data/Newcomers.json";

export default {
  name: "Artiste",
  components: {
    Hero,
    Carousel,
    Footer
  },
  data() {
    return {
      text: "newcommer test",
      myJson: data_newcomers
    };
  },
  methods: {
    print: function(a) {
      console.log(a);
      return a;
    }
  }
};
</script>

<style lang="scss">
@import "./Artiste.scss";
</style>
