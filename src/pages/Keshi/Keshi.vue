<template>
    <div>
        <Bread :title = "title" />
        <div class="content">
          <ul>
            <li class="item" v-for="(item, index) in keshiTotal" :key="index" @click="goTo(item.title)">
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
    import Bread from '../../components/Bread/Bread.vue'
    export default {
        data() {
          return {
            keshiTotal: [
              {title: '美容外科', imgUrl: require('./images/waike.png')},
              {title: '美容皮肤科', imgUrl: require('./images/pifuke.png')},
              {title: '美容牙科', imgUrl: require('./images/yake.png')},
              {title: '美容中医科', imgUrl: require('./images/zhongyike.png')},
              {title: '麻醉科', imgUrl: require('./images/mazuike.png')},
              {title: '护理', imgUrl: require('./images/huli.png')}
            ],
            title: "科室介绍"
          }
        },
        components: {
          Bread
        },
        mounted(){
          let doctorList = require('../../../data/doctorList.json')
          doctorList = Array.from(doctorList.Data)
          console.log(doctorList[0].doctors);
        },
        methods: {
          goTo(param){
            // console.log(param)
            this.$router.push({name: 'keshiList', query: {title: param}})
          }
        },
    }
</script>

<style lang="less" scoped>
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
        background-color: #2b8cff;
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
        background-color: #20baee;
        box-shadow: 0 3px 15px #20baee;
      }
    }
    }

  }
}
</style>