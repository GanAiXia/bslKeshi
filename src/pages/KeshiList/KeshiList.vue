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
</style>