<template>
  <div id="app">
    <!-- 头部、logo -->
    <div class="head">
      <div class="head-img">
        <img src="./assets/images/logo.jpg" alt="上海伯思立">
      </div>
    </div>
    <div class="bread">
      <P>科室介绍</P>
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
  background-color: #FFF;
  .head-img {
    width: 4.31rem;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
.bread {
  width: 100%;
  height: 1.2rem;
  background: url('./assets/images/bread.jpg') no-repeat;
  background-size: 100% 100%;
  p {
    font-size: .4rem;
    line-height: 1.2rem;
    color: #FFF;
    padding-left: .5rem;
  }
}
</style>
