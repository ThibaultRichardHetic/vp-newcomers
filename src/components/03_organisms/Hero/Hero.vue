<template>
  <div class="container--hero">
    <div v-for="newcomer in myJson.newcomers" :key="newcomer.to">
      <div class="hero--newcomer" v-if="$route.params.id === newcomer.to">
        <div class="hero__flex">
          <div class="hero--images">
            <img :src="require(`@/assets/images/newcomers/${newcomer.picture_1}`)">
          </div>
          <div class="hero--infos">
            <CpText tag="h4" type="card-title">{{ newcomer.firstname }} {{ newcomer.lastname }}</CpText>
            <div class="info__old">
              <img :src="require(`@/assets/images/cake.svg`)">
              <CpText tag="p" type="card">{{ newcomer.years }}</CpText>
            </div>
            <div class="info__place mt16">
              <img :src="require(`@/assets/images/house.svg`)">
              <CpText tag="p" type="card">{{ newcomer.live }}</CpText>
            </div>
            <div class="info__description">
              <CpText tag="h4" type="title mt16">About</CpText>
              <CpText tag="p" type="card">{{ newcomer.description }}</CpText>
            </div>
          </div>
        </div>
        <div class="hero__flex">
          <div class="hero--passions">
            <CpText tag="h4" type="title">Passions</CpText>
            <div class="passions">
              <div class="passion">
                <CpText tag="p" type="card">{{ newcomer.passion_1 }}</CpText>
              </div>
              <div class="passion">
                <CpText tag="p" type="card">{{ newcomer.passion_2 }}</CpText>
              </div>
              <div class="passion">
                <CpText tag="p" type="card">{{ newcomer.passion_3 }}</CpText>
              </div>
            </div>
          </div>
          <div class="hero--links">
            <div class="hero--insta">
              <CpText tag="h4" type="title">More of me?</CpText>
              <a :href="newcomer.insta" target="_blank">
                <img :src="require(`@/assets/images/insta.png`)">
              </a>
            </div>
            <div class="hero--music mt16">
              <CpText tag="h4" type="title mt16">My playlist</CpText>
              <a :href="newcomer.spotify" target="_blank">
                <img :src="require(`@/assets/images/spotify.png`)">
              </a>
            </div>
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
    CpText
  },
  props: {
    home: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      myJson: data_newcomers
    };
  }
};
</script>

<style lang="scss">
@import "./Hero.scss";
</style>
