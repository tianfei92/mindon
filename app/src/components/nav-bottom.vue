<template>
    <!--QQ、二维码导航-->
    <div class="contact-nav">
        <a href="tel:18008091258" class="phone"></a>
        <a href="sms:18008091258" class="WeChat"></a>
        <a href="http://wpa.qq.com/msgrd?v=3&uin=1137333869&site=qq&menu=yes" class="QQ" target="_blank"></a>
        <a href="javascript: void(0)" class="back-top" @click="scrollTo"></a>
    </div>  
</template>
<script>
export default {
    name: 'nav-bottom',
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
        background-color: #3a3a3a;
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 150px;
        bottom: 0;
        padding: 20px 0;
        a {
            display: block;
            float: left;
            width: 25%;
            height: 100%;
            background-size: 25% !important;
            &.QQ {
                background: url('../assets/img/index/qqContact.png') center no-repeat
            }
            &.WeChat {
                background: url('../assets/img/index/message.png') center no-repeat
            }
            &.phone {
                background: url('../assets/img/index/phone.png') center no-repeat
            }
            &.back-top {
                background: url('../assets/img/index/backToTop.png') center no-repeat
            }
        }
    }
</style>
