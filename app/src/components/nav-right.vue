<template>
    <!--QQ、二维码导航-->
    <div class="contact-nav">
        <div class="nav">
            <a href="javascript: void(0)" class="phone"></a>
            <span>电话：180-0809-1258</span>
        </div>
        <div class="nav">
            <a href="javascript: void(0)" class="WeChat"></a>
            <div class="m-w">
                <img src="../assets/img/index/wechat.jpeg" alt="">
                <span>微信二维码</span>
            </div>
        </div>
        <div class="nav">
            <a href="javascript: void(0)" class="QQ"></a>
            <span>QQ：1137333869</span>
        </div>
        <div class="nav no-need">
            <a href="javascript: void(0)" class="back-top" @click="scrollTo"></a>
        </div>
    </div>  
</template>
<script>
export default {
    methods: {
        scrollTo: function() {
            $('html,body').animate({scrollTop: -60}, 800)
        }
    }  
}
</script>
<style lang="less" scoped>
    // 右侧浮动
    .contact-nav {
        position: fixed;
        z-index: 999;
        width: 40px;
        height: 150px;
        float: right;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        .nav {
            position: relative;
            cursor: pointer;
            display: block;
            width: 40px;
            height: 50px;
            text-align: center;
            text-decoration: none;
            background-color: #333 !important;
            color: #fff;
            font-size: 14px;
            line-height: 60px;
            margin-top: 1px;
            background-size: 45% !important;
            a {
                display: block;
                width: 100%;
                height: 100%;
                background-size: 50% !important;
                &.QQ {
                    background: url('../assets/img/index/qqContact.png') center no-repeat
                }
                &.WeChat {
                    background: url('../assets/img/index/wechat.png') center no-repeat
                }
                &.phone {
                    background: url('../assets/img/index/phoneContact.png') center no-repeat
                }
                &.back-top {
                    background: url('../assets/img/index/backToTop.png') center no-repeat
                }
            }
            span {
                display: inline-block;
                height: 50px;
                line-height: 50px;
                width: 170px;
                background-color: #333;
                position: absolute;
                bottom: 0;
                left: 50px;
                opacity: 0;
                &:after {
                    content: '';
                    position: absolute;
                    top: 19px;
                    display: block;
                    width: 0;
                    height: 0;
                    border: solid 8px;
                    border-color: transparent transparent transparent #333;
                    right: -16px;
                    z-index: 1;
                }
            }
            .m-w {
                position: absolute;
                width: 170px;
                height: 220px;
                bottom: 0;
                left: 50px;
                opacity: 0;
                border: solid 1px #333;
                img {
                    max-width: 100%;
                }
                span {
                    left: 0;
                }
            }
            &:hover {
                transition: all 0.5s;
                background-color: rgb(196, 0, 0) !important;
                span {
                    left: -170px;
                    opacity: 1;
                    transition: all 0.5s;
                }
                .m-w {
                    left: -170px;
                    opacity: 1;
                    transition: all 0.5s;
                    span {
                        left: 0 !important;
                    }                
                }
            }
        }
        .nav.no-need:hover {
            background-color: #333 !important;
        }
    }
</style>
