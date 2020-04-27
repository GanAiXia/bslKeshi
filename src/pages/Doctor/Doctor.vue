<template>
    <div>
        <div class="content">
            <div class="contson">
                <div class="top">
                    <div class="doctorimg">
                        <img :src="doctor.docImg" alt="" srcset="">
                    </div>
                    <div class="doctortext">
                        <h2>{{doctor.name}}</h2>
                        <span class="line"></span>
                        <h4>{{doctor.touxian}}</h4>                        
                        <div class="shanchang" v-if="doctor.goodat">
                        擅长：{{doctor.goodat}} 
                        </div>                        
                    </div>
                </div>
                <div class="bottom">
                    {{doctor.detail}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                doctor: {}
            }
        },
        mounted() {
           const doctor = localStorage.getItem("doctor")
           console.log(doctor);
           this.doctor = JSON.parse(doctor)
        }
    }
</script>

<style lang="less" scoped>
.content {
    width: 100%;
    height: calc(~"100vh - 1.44rem");
    background: url(./images/bg.jpg) no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    .contson{
        width: 80%;
        height: 100%;
        margin: 0 auto;
        padding-top: 1rem;
        .top{
            width: 100%;
            margin-bottom: 1.3rem;
            display: flex;
            .doctorimg {
                width: 1.906667rem;
                height: 1.906667rem;
                border-radius: .946667rem;
                img {
                    width: 100%;
                }
            }
            .doctortext {
                padding-left: 0.5rem;
                padding-top: 0.2rem;
                display: flex;             
                flex-wrap: wrap;
                width: 5rem;
                h2 {
                    font-size: 0.5rem;
                    font-weight: bold;
                    color: #fff;
                    padding-right: 0.3rem;
                }
                h4 {
                    font-size: 0.3rem;
                    color: #fff;
                    padding-top: 0.17rem;
                }
                .shanchang {
                    color: #fff;
                    width: 5rem;
                    line-height: 0.38rem;
                }
            }
        }
        .bottom {
            color: #ffffff;
            line-height: 0.5rem;
            text-align: justify;
        }
    }
}
</style>