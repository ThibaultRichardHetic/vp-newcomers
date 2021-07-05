<template>
    <input :class="`input--${type}`" :type="`${type}`" :placeholder="`${placeholder}`">
</template>


<script>
// changer le nom de la class
export default {
  name: 'Input',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Fill the blank'
    },
  }
}
</script>


<style lang="scss">
@import "./CpInput.scss";
</style>