<template>
  <div class="colortheme">
    <CpSwitch />
    <CpText tag="p"> <span id="theme-text">dark</span> theme</CpText>
  </div>
</template>

<script>
import CpSwitch from "@/components/01_atoms/CpSwitch/CpSwitch.vue";
import CpText from "@/components/01_atoms/CpText/CpText.vue";

export default {
  name: "ColorTheme",
  components: {
    CpSwitch,
    CpText
  },
  data() {
    return {
      Mode: "Dark mode"
    };
  }
};
</script>

<style lang="scss">
@import "./ColorTheme.scss";
</style>

