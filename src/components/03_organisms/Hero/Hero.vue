<template>
  <div class="container--hero">
    <div class="hero--bg">
      <div v-for="newcomer in myJson.newcomers" :key="newcomer.to">
        <div class="hero--artiste" v-if="$route.params.id === newcomer.to">
          <div class="hero__card">
            <div class="container--card">
              <div class="card--bg">
                <div class="container--image">
                  <img :src="require(`@/assets/images/newcomers/${newcomer.picture_1}`)">
                </div>
                <div class="content">
                  <CpText tag="h4" type="card-title">{{ newcomer.firstname }} {{ newcomer.lastname }}</CpText>
                  <CpText tag="p" type="card">{{ newcomer.years }}</CpText>
                  <CpText tag="p" type="card">{{ newcomer.gender }} ans</CpText>
                  <CpText tag="p" type="card">{{ newcomer.live }}</CpText>
                </div>
              </div>
            </div>
          </div>

          <div class="hero__text">
            <CpText tag="h1" type="title">{{ newcomer.firstname }}</CpText>
            <CpText tag="h2" type="title">Titres analysés : {{ newcomer.firstname }}</CpText>
            <CpText tag="h3" type="title">Issu de {{ newcomer.firstname }} albums différents</CpText>
            <CpText tag="p" type="main">{{ newcomer.description }}</CpText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";
import data_newcomers from "@/assets/data/Newcomers.json";

export default {
  name: "Hero",
  components: {
    CpText,
  },
  props: {
    home: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      myJson: data_newcomers,
    };
  }
};
</script>

<style lang="scss">
@import "./Hero.scss";
</style>
