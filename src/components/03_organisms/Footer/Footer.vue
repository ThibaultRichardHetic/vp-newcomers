<template>
  <div class="container--footer">
    <CpLink tag="/" type="logo">
      <img src="@/assets/images/logo.png" alt>
    </CpLink>
    <div class="footer__content">
      <CpText tag="h4" type="footer-title">Propulsed by</CpText>
      <CpText tag="p" type="footer">Thibault Richard</CpText>
    </div>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";
import CpLink from "@/components/01_atoms/CpLink/CpLink.vue";

export default {
  name: "Footer",
  components: {
    CpText,
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
@import "./Footer.scss";
</style>
