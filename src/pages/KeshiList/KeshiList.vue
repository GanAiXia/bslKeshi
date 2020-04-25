<template>
    <div>
        <Bread :title="title"/>
        <div class="container">
            <div class="toptext">
                <div class="p1">
                    上海伯思立医疗美容门诊部美容外科成立于2015年。
                </div>
                <div class="p2">
                    现有主任医师1名、副主任医师2名，主治医师16名、执业医师4名等。多名医师曾在上海第九人民医院，第一人民医院，长海医院等公立医院从事临床工作，美容外科医师曾荣获（专利，奖状，社会任职）。
                </div>
                <div class="p3">
                    目前，科室开展了眼部整形、鼻部整形、胸部整形、自体脂肪移植、抽脂、植发、疤痕综合治疗等多种项目，致力为求美者提供全方位的医疗服务。     
                </div>
            </div>
            <div class="doctor">
                <div class="doctorcon">
                    <div class="topimg">
                        <img src="../../../public/images/doctors/sgx_03.png">
                    </div>
                    <div class="centertext">
                        <h2>沈国雄</h2>
                        <span class="line"></span>
                        <h4>院长</h4>
                    </div>
                    <span class="detail" @click="toDoctor(1)">
                        <a href="javascript:;">查看详情</a>
                    </span>
                </div>
                <div class="doctorcon">
                    <div class="topimg">
                        <img src="../../../public/images/doctors/sgx_03.png">
                    </div>
                    <div class="centertext">
                        <h2>沈国雄</h2>
                        <span class="line"></span>
                        <h4>院长</h4>
                    </div>
                    <span class="detail" @click="toDoctor(2)">
                        <a href="">查看详情</a>
                    </span>
                </div>
                <div class="doctorcon">
                    <div class="topimg">
                        <img src="../../../public/images/doctors/sgx_03.png">
                    </div>
                    <div class="centertext">
                        <h2>沈国雄</h2>
                        <span class="line"></span>
                        <h4>院长</h4>
                    </div>
                    <span class="detail" @click="toDoctor(3)">
                        <a href="">查看详情</a>
                    </span>
                </div>
                <div class="doctorcon">
                    <div class="topimg">
                        <img src="../../../public/images/doctors/sgx_03.png">
                    </div>
                    <div class="centertext">
                        <h2>沈国雄</h2>
                        <span class="line"></span>
                        <h4>院长</h4>
                    </div>
                    <span class="detail" @click="toDoctor(4)">
                        <a href="">查看详情</a>
                    </span>
                </div>                                                
            </div>
        </div>
    </div>
</template>

<script>
    import Bread from '../../components/Bread/Bread.vue'
    export default {
        data() {
            return {
                title: '科室介绍'
            }
        },
        components: {
            Bread
        },
        mounted() {
            this.title = this.$route.query.title            
        },
        methods: {
            toDoctor(param){
                this.$router.push({name: 'doctor', query: param})
            }
        }
    }
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    overflow: hidden;
    padding-top: .56rem;
    .toptext {
        width: 9.08rem;
        margin: 0 auto;
        font-size: .293333rem;
        color: #333333;
        line-height: .586667rem;
        font-family: "alibaba";
        text-align: justify;
    }
}
.doctor {
    width: 100%;
    padding-top: 1.36rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .doctorcon{
        width: 3.72rem;
        height: 4.84rem;
        margin: 0 .52rem .8rem;
        box-shadow: 3px 3px 10px #ccc;
        border-radius: .24rem;
        text-align: center;
        .topimg{
            width: 1.906667rem;
            height: 1.906667rem;
            margin: 0 auto;
            margin-top: .3rem;
            border-radius: .946667rem;
            img{
                width: 100%;
            }
        }
        h2 {
            color: #333;
            font-size: .48rem;
            font-weight: bold;
            margin: .32rem 0 .17rem;
        }
        .line {
            display: block;
            margin: 0 auto;
            border-bottom: 2px solid #999999;
            width: .36rem;
        }
        h4 {
            color: #9a9a9a;
            font-size: .32rem;
            margin: .17rem 0 .23rem;
        }
        .detail {
            display: block;
            margin: 0 auto;
            background-color: #2b8cff;
            width: 1.8rem;
            height: .53rem;
            border-radius: .26rem;
            a {
                color: #ffffff;
                font-size: .266667rem;
                line-height: .55rem;
            }
        }
    }
}
</style>