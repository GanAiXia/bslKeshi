<template>
  <div id="app">
    <TopHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader/TopHeader'
export default {
  name: 'App',
  components: {
    TopHeader
  }
}
</script>

<style lang="less" rel="stylesheet/less">

</style>
