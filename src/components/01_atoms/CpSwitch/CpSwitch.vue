<template>
  <div>
    <input type="checkbox" id="switch" @change="switchTheme">
    <label for="switch">Toggle</label>
  </div>
</template>

<script>
export default {
  name: "CpSwitch",
  data() {
    return {
      checked: "true",
      Mode: "DarkMode",
      currentTheme: "light"
    };
  },
  computed: {
    newTheme() {
      return this.currentTheme === "light" ? "dark" : "light";
    }
  },
  methods: {
    switchTheme() {
      const app = document.querySelector("#app");
      const text = document.querySelector("#theme-text");
      text.innerHTML = this.currentTheme;
      app.setAttribute("data-theme", this.newTheme);
      this.currentTheme = this.newTheme;
    }
  }
};
</script>

<style lang="scss">
@import "./CpSwitch.scss";
</style>