<template>
  <div class="container--carousel">
    <CpText tag="h2" type="title t1">{{ title }}</CpText>
    <CpText tag="h2" type="title t2">Swipe!</CpText>
    <VueSlickCarousel v-bind="settings">
      <div class="container--slide" v-for="newcomer in myJson.newcomers" :key="newcomer.lastname">
        <div class="slide--bg">
          <div class="container--image" v-if="newcomer.picture_1">
            <img :src="require(`@/assets/images/newcomers/${newcomer.picture_1}`)" alt>
          </div>
          <div class="container--image" v-else>
            <img :src="require(`@/assets/images/newcomers/default.jpg`)" alt>
          </div>
          <div class="content">
            <CpText tag="h4" type="card-title carousel">{{ newcomer.firstname }}</CpText>
            <CpText v-if="newcomer.job" tag="p" type="card carousel">{{ newcomer.job }}</CpText>
            <CpText tag="p" type="card carousel">{{ newcomer.live }}</CpText>
            <CpLink :page="`/newcomer/${newcomer.to}`" type="button-card">More +</CpLink>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <CpText tag="h2" type="title mt24">Swipe!</CpText>
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
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              centerMode: true,
              centerPadding: "8px"
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
