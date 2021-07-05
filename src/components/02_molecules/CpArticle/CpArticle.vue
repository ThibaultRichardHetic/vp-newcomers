<template>
  <div class="article">
    <CpText tag="h3" type="subtitle">{{ h3 }}</CpText>
    <CpText tag="p">{{ p }}</CpText>
  </div>
</template>

<script>

import CpText from "@/components/01_atoms/CpText/CpText.vue";

export default {
  name: "CpArticle",
  components: {
    CpText,
  },
  data() {
    return {
      h3: "Delete my account",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  }
};
</script>

<style lang="scss">
  @import "./CpArticle.scss";
</style>
