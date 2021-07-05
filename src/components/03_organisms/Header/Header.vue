<template>
  <div class="container--header">
    <CpLink to="/" type="logo">
      <img src="@/assets/images/logo.png" alt>
    </CpLink>
    <div class="header__right">
    </div>
  </div>
</template>

<script>
import CpLink from "@/components/01_atoms/CpLink/CpLink.vue";

export default {
  name: "Header",
  components: {
    CpLink,
  }
};
</script>

<style lang="scss">
@import "./Header.scss";
</style>
