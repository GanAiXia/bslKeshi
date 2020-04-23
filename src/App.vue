<template>
  <div id="app">
    <!-- 头部、logo -->
    <div class="head">
      <div class="head-img">
        <img src="./assets/images/logo.png" alt="上海伯思立">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="less" rel="stylesheet/less">
.head {
  width: 100%;
  height: 1.08rem;
  background-color: pink;
  .head-img {
    width: 3.1rem;
    height: .54rem;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>
