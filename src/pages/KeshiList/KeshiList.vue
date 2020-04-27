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
                <div class="doctorcon" v-for="(doctor, index) in listCont2" :key="index">
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
            <div class="next" v-if="showNext">
                <div class="nextCont" @click="nextPage()">
                    下一页
                </div>
            </div> 
            <div class="next" v-if="showPre" @click="prePage">
                <div class="nextCont">
                    上一页
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
                listCont: [],
                listCont2: [],
                showNext: false,
                showPre: false
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
            if (listCont.length > 12) {
                this.listCont2 = listCont.slice(0, 12)  
                this.listCont = listCont
                this.showNext = true           
            }else{
                this.listCont2 = listCont
            }            
        },
        methods: {
            toDoctor(doctor){
                doctor = JSON.stringify(doctor)
                localStorage.setItem("doctor", doctor)
                this.$router.push({name: 'doctor'})
            },
            nextPage(){
                this.listCont2 = this.listCont.slice(12, this.listCont.length)
                this.showNext = false
                this.showPre = true
            },
            prePage(){
                this.listCont2 = this.listCont.slice(0, 12)
                this.showNext = true
                this.showPre = false
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
        box-shadow: 3px 3px 10px rgba(204, 204, 204, 0.5);
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
.next {
    width: 100%;
    margin-bottom: 1rem;
    .nextCont {
        width: 2.226667rem;
        height: .613333rem;
        margin: 0 auto;
        text-align: center;
        line-height: .613333rem;
        color: #9a9a9a;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
    }
}
</style>