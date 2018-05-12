<template>
    <div class="footer" :class="{load:pageLoaded === true}">
        <div class="bottom">
            <img src="http://sa.easywed.cn/dist/images/officialWebsite-v2.0/homepage/bottom-form-people.png?1570212" alt="" class="people">
            <div class="m-QQ">1137333869</div>
            <div class="m-telphone">180-0809-1258</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageLoaded: false,
        }
    },
    mounted() {
        let self = this;
        setTimeout(function(){
            self.pageLoaded = true;
        }, 2000)
    },
}
</script>
<style lang="less" scoped>
    .footer {
        position: fixed;
        width: 100%;
        height: 90px;
        background-color: rgba(0, 0, 0, 0.75);
        bottom: -140px;
        z-index: 999;
        color: #fff;
        .bottom {
            position: relative;
            width: 1190px;
            height: 90px;
            margin: auto;
            .people {
                position: absolute;
                bottom: 6px;
                left: 50px;
            }
            .m-telphone {
                position: absolute;
                right: 200px;
                bottom: 7px;
                font-size: 24px;
                line-height: 50px;
                &::before {
                    content: '';
                    background: url('../assets/img/index/phone.png') center no-repeat;
                    background-size: contain;
                    display: inline-block;
                    width: 35px;
                    height: 35px;;
                    vertical-align: sub;
                    margin-right: 20px;
                }
            }
            .m-QQ {
                position: absolute;
                left: 400px;
                bottom: 6px;
                font-size: 24px;
                line-height: 50px;
                &::before {
                    content: url('../assets/img/index/qqContact.png');
                    display: inline-block;
                    vertical-align: sub;
                    margin-right: 20px;
                }
            }
        }
    }
    .footer.load {
        transition: all 0.5s;
        bottom: 0;
    }
</style>


