<template>
  <div class="home">
    <h2>icon svg 自动导入测试</h2>
    <div class="svg-demo">
      <icon-svg name="aspect-ratio" />
      <icon-svg name="at" />
    </div>
    <HelloWorld msg="HelloWorld" />
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.svg-demo {
  color: #a524b5;
}
</style>
