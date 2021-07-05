<template>
  <div class="page--artiste">
    <Header/>
    <Hero/>
  </div>
</template>

<script>
import Hero from "@/components/03_organisms/Hero/Hero.vue";
import Header from "@/components/03_organisms/Header/Header.vue";

import data_newcomers from "@/assets/data/Newcomers.json";

export default {
  name: "Artiste",
  components: {
    Header,
    Hero
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
