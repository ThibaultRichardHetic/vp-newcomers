<template>
  <div class="container--header">
    <CpLink tag="/" type="logo">
      <img class="back" src="@/assets/images/back.svg">
      <img class="logo" src="@/assets/images/logo.png">
    </CpLink>
  </div>
</template>

<script>
import CpLink from "@/components/01_atoms/CpLink/CpLink.vue";

export default {
  name: "Header",
  components: {
    CpLink,
  },
  data() {
    return {
      text: "Louis vuitton test"
    };
  }
};
</script>

<style lang="scss">
@import "./Header.scss";
</style>
