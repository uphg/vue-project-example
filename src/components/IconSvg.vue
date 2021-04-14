
<template>
  <svg class="icon-svg" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'IconSvg',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`
    }
  }
}
</script>

<style>
.icon-svg {
  width: 100px;
  height: 100px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
