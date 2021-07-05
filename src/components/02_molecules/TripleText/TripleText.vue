<template>
  <div class="triple-text">
    <CpText tag="p" type="triple-ext">{{ text }}</CpText>
    <CpText tag="p" type="triple">{{ text }}</CpText>
    <CpText tag="p" type="triple-ext">{{ text }}</CpText>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";

export default {
  name: "TripleText",
  components: {
    CpText
  },
  props: {
    text: {
      type: String,
      default: "text"
    },
  }
};
</script>


<style lang="scss">
@import "./TripleText.scss";
</style>