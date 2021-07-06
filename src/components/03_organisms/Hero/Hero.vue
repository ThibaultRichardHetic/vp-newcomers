<template>
  <div class="container--hero">
    <div v-for="newcomer in myJson.newcomers" :key="newcomer.to">
      <div class="hero--newcomer" v-if="$route.params.id === newcomer.to">
        <div class="hero__flex">
          <div class="hero--images" v-on:click="swap()">
            <div class="images__dots">
              <div v-if="newcomer.picture_1" class="dot" :class="{ 'active': position == 1 }"></div>
              <div v-if="newcomer.picture_2" class="dot" :class="{ 'active': position == 2 }"></div>
              <div v-if="newcomer.picture_3" class="dot" :class="{ 'active': position == 3 }"></div>
            </div>
            <img :src="require(`@/assets/images/newcomers/${image}`)">
          </div>

          <div class="hero--infos">
            <div class="info">
              <CpText tag="h4" type="card-title">{{ newcomer.firstname }} {{ newcomer.lastname }}</CpText>
              <div class="info__job" v-if="newcomer.job">
                <img :src="require(`@/assets/images/job.svg`)">
                <CpText tag="p" type="card">{{ newcomer.job }}</CpText>
              </div>
              <div class="info__old mt16" v-if="newcomer.years">
                <img :src="require(`@/assets/images/cake.svg`)">
                <CpText tag="p" type="card">{{ newcomer.years }}</CpText>
              </div>
              <div class="info__place mt16" v-if="newcomer.live">
                <img :src="require(`@/assets/images/house.svg`)">
                <CpText tag="p" type="card">{{ newcomer.live }}</CpText>
              </div>
              <div class="info__description" v-if="newcomer.description">
                <CpText tag="h4" type="title mt16">About</CpText>
                <CpText tag="p" type="card">{{ newcomer.description }}</CpText>
              </div>
            </div>

            <div class="hero--passions">
              <CpText tag="h4" type="title">Passions</CpText>
              <div class="passions">
                <div class="passion" v-if="newcomer.passion_1">
                  <CpText tag="p" type="card">{{ newcomer.passion_1 }}</CpText>
                </div>
                <div class="passion" v-if="newcomer.passion_2">
                  <CpText tag="p" type="card">{{ newcomer.passion_2 }}</CpText>
                </div>
                <div class="passion" v-if="newcomer.passion_3">
                  <CpText tag="p" type="card">{{ newcomer.passion_3 }}</CpText>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <div class="hero--links">
              <div class="hero--insta" v-if="newcomer.insta">
                <CpText tag="h4" type="title">Follow me!</CpText>
                <a :href="newcomer.insta" target="_blank">
                  <img :src="require(`@/assets/images/insta.png`)">
                </a>
              </div>
              <div class="hero--music mt16" v-if="newcomer.spotify">
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
      myJson: data_newcomers,
      image: "newcomer.picture_1",
      comer: {},
      position: 1
    };
  },
  methods: {
    swap: function() {
      if (this.image == this.comer.picture_1) {
        if (this.comer.picture_2) {
          this.image = this.comer.picture_2;
          this.position = 2;
        }
      } else if (this.image == this.comer.picture_2) {
        if (this.comer.picture_3) {
          this.image = this.comer.picture_3;
          this.position = 3;
        } else {
          this.image = this.comer.picture_1;
          this.position = 1;
        }
      } else if (this.image == this.comer.picture_3) {
        this.image = this.comer.picture_1;
        this.position = 1;
      }
    },
    getImg: function() {
      for (let i = 0; i < this.myJson.newcomers.length; i++) {
        if (this.myJson.newcomers[i].to == this.$route.params.id) {
          this.image = this.myJson.newcomers[i].picture_1;
          this.comer = this.myJson.newcomers[i];
        }
      }
    }
  },
  beforeMount() {
    this.getImg();
  }
};
</script>

<style lang="scss">
@import "./Hero.scss";
</style>
