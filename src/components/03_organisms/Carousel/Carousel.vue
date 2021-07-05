<template>
  <div class="container--carousel">
    <CpText tag="h2" type="title">{{ title }}</CpText>
    <VueSlickCarousel v-bind="settings">
      <div class="container--slide" v-for="newcomer in myJson.newcomers" :key="newcomer.lastname">
        <div class="slide--bg">
          <div class="container--image">
            <img :src="require(`@/assets/images/newcomers/${newcomer.picture_1}`)" alt>
          </div>
          <div class="content">
            <CpText tag="h4" type="card-title">{{ newcomer.firstname }}</CpText>
            <CpText tag="p" type="card">{{ newcomer.years }} years old</CpText>
            <CpText tag="p" type="card">{{ newcomer.live }}</CpText>
            <CpLink :page="`/newcomer/${newcomer.to}`" type="button-card">More +</CpLink>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";
import CpLink from "@/components/01_atoms/CpLink/CpLink.vue";
import data_newcomers from "@/assets/data/Newcomers.json";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Carousel",
  components: {
    CpText,
    CpLink,
    VueSlickCarousel
  },
  data() {
    return {
      title: "See a newcommer",
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      },
      myJson: data_newcomers
    };
  }
};
</script>

<style lang="scss">
@import "./Carousel.scss";
</style>
