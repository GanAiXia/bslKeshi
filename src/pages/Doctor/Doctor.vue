<template>
    <div>
        <div class="content">
            <div class="contson">
                <div class="top">
                    <div class="doctorimg">
                        <img src="../../../public/images/doctors/sgx_03.png" alt="" srcset="">
                    </div>
                    <div class="doctortext">
                        <h2>沈国雄</h2>
                        <span class="line"></span>
                        <h4>院长</h4>                        
                        <div class="shanchang">
                        擅长：隆鼻术、重睑术 
                        </div>                        
                    </div>
                </div>
                <div class="bottom">
                    毕业于上海第二医科大学，1999年-2009年，在上海交通大学医学院附属上海第九人民医院任职，临床工作近20年；现任上海伯思立医疗美容门诊部美容外科医师。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
.content {
    width: 100%;
    height: calc(~"100vh - 1.44rem");
    background: url(./images/bg.jpg) no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    overflow: hidden;
    .contson{
        width: 8rem;
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
                padding-top: 0.3rem;
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