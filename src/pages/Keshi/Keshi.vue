<template>
    <div>
        <div class="bread">
            <P>科室介绍</P>
        </div>
        <div class="content">
          <ul>
            <li class="item" v-for="(item, index) in keshiTotal" :key="index">
              <div class="img">
                <img :src="item.imgUrl" :alt="item.title">
              </div>
              <p>{{ item.title }}</p>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            keshiTotal: [
              {title: '美容外科', imgUrl: require('./images/waike.png'), toUrl: '/'},
              {title: '美容皮肤科', imgUrl: require('./images/pifuke.png'), toUrl: '/'},
              {title: '美容牙科', imgUrl: require('./images/yake.png'), toUrl: '/'},
              {title: '美容中医科', imgUrl: require('./images/zhongyike.png'), toUrl: '/'},
              {title: '麻醉科', imgUrl: require('./images/mazuike.png'), toUrl: '/'},
              {title: '护理', imgUrl: require('./images/huli.png'), toUrl: '/'}
            ]
          }
        },
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
.content {     
  font-family: 'alibaba';
  width: 100%;
  padding-top: 2.133333rem;
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li{
      width: 33.33%;
      text-align: center;
      padding-bottom: 1.333333rem;
      .img {
        width: 1.333333rem;
        height: 1.333333rem;
        margin: 0 auto;
        border-radius: .666667rem;
        overflow: hidden;
        box-shadow: 0 3px 15px #2b8cff;
        img{
          width: 100%;
        }
      }
      p{
        padding-top: .346667rem;
        font-size: .346667rem;
        color: #666;
      }
      &:nth-child(2n) {
      .img {
        box-shadow: 0 3px 15px #20baee;
      }
    }
    }

  }
}
</style>