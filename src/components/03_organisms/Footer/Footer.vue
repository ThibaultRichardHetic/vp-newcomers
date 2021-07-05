<template>
  <div class="container--footer">
    <CpLink tag="/" type="logo">
      <img src="@/assets/images/logo.png" alt>
    </CpLink>
    <div class="footer__content">
      <CpText tag="h4" type="footer-title">Lines</CpText>
      <CpText tag="p" type="footer">Newsletter</CpText>
      <CpText tag="p" type="footer">Mentions légales</CpText>
      <CpText tag="p" type="footer">Cookies</CpText>
    </div>
    <div class="footer__content">
      <CpText tag="h4" type="footer-title">Nous suivre</CpText>
      <CpText tag="p" type="footer">Facebook</CpText>
      <CpText tag="p" type="footer">Instagram</CpText>
      <CpText tag="p" type="footer">Twitter</CpText>
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
