<template>
    <div>
        <Bread :title="title"/>
        <div class="container">
            <div class="toptext">
                <div class="p1" v-for="(item, index) in listreduce" :key="index">
                    {{item.p1}}
                </div>
            </div>
            <div class="doctor">
                <div class="doctorcon" v-for="(doctor, index) in listCont" :key="index">
                    <div class="topimg">
                        <img :src="doctor.docImg">
                    </div>
                    <div class="centertext">
                        <h2>{{doctor.name}}</h2>
                        <span class="line"></span>
                        <h4>{{doctor.touxian}}</h4>
                    </div>
                    <span class="detail" @click="toDoctor(doctor)">
                        <a href="javascript:;">查看详情</a>
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
                title: '科室介绍',
                listreduce: [],
                listCont: []
            }
        },
        components: {
            Bread
        },
        mounted() {
            const title = JSON.parse(localStorage.getItem("title"))
            this.title = title
            const listreduce = JSON.parse(localStorage.getItem("listreduce"))
            this.listreduce = listreduce
            const listCont = JSON.parse(localStorage.getItem("listCont"))
            this.listCont = listCont
            console.log(this.listreduce)
            console.log(this.listCont)
    
        },
        methods: {
            toDoctor(doctor){
                // console.log(doctor);
                doctor = JSON.stringify(doctor)
                localStorage.setItem("doctor", doctor)
                this.$router.push({name: 'doctor'})
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
    width: 9.08rem;
    margin: 0 auto;
    padding-top: 1.36rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .doctorcon{
        width: 3.72rem;
        height: 4.84rem;
        margin: 0 .34rem .8rem;
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
    &::after{
        content: '';
        width: 3.72rem;
        margin: 0 .34rem .8rem;
    }    
}
</style>