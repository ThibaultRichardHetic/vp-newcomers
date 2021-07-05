<template>
  <div class="artiste-circle">
    <div v-if="hover" class="content">
      <CpText tag="p" type="main">{{ name }}</CpText>
      <CpText tag="p" type="main">{{ score }}</CpText>
    </div>
    <img :src="require(`@/assets/images/artistes/${image}`)" alt>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";

// changer le nom de la class
export default {
  name: "ArtisteCircle",
  components: {
    CpText
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    image: {
      type: String,
      default: "nekfeu.png"
    },
    hover: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "nekfeu"
    },
    score: {
      type: Number,
      default: 1000
    }
  }
};
</script>


<style lang="scss">
@import "./ArtisteCircle.scss";
</style>