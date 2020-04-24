<template>
    <div class="bread">
        <P>{{ title }}</P>
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style lang="less" scoped>
.bread {
  width: 100%;
  height: 1.6rem;
  font-family: 'alibaba';
  background: url('../../assets/images/bread.jpg') no-repeat;
  background-size: 100% 100%;
  p {
    font-size: .533333rem;
    line-height: 1.6rem;
    color: #FFF;
    padding-left: .666667rem;
  }
}
</style>