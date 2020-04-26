<template>
    <div>
        <!-- 头部、logo -->
        <div class="head">
            <div class="head-img" @click="gotoHome()">
                <img src="../../assets/images/logo.jpg" alt="上海伯思立">
            </div>
        </div>               
    </div>
</template>

<script>
    export default {
        methods: {
          gotoHome(){
            this.$router.push('/')
          }
        },
    }
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 1.44rem;
  background-color: #FFF;
  .head-img {
    width: 5.746667rem;
    margin: 0 auto;
    padding-top: .2rem;
    img {
      width: 100%;
    }
  }
}
</style>