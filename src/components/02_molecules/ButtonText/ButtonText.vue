<template>
  <div :class="`button--${type}`">
    <CpText tag="span" type="button">{{ content }}</CpText>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";

export default {
  name: "ButtonText",
  components: {
    CpText
  },
  props: {
    type: {
      type: String,
      default: "active"
    },
    content: {
      type: String,
      default: "push it"
    }
  },

};
</script>

<style lang="scss">
@import "./ButtonText.scss";
</style>
