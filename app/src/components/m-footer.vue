<template>
    <!--详细联系方式-->
    <div class="contact-info" id="m-contact">
        <div class="clearfix">
            <div class="left">
                <h3>成都曼同文化传播有限公司</h3>
                <div class="ewm"></div>
                <div class="address"></div>
            </div>
            <div class="right">
                <h3>联系方式</h3>
                <p class="tel-num">客服电话：180-0809-1258</p>
                <p class="email">商务合作：<a href="mailto:286535774@qq.com">286535774@qq.com</a></p>
                <p class="address">地址一：成都市光华村街2号天祥广场1栋2单元1705</p>
                <p class="address">地址二：四川成都武侯区高攀路2号魏玛国际广场1829</p>
                <p>服务时间：周一至周日 10:00-19:00</p>
            </div>
        </div>
        <div class="clearfix copy">
            <p class="copyright">
                Copyright @ 2017-2018 蜀ICP备 18013677号
                <br>
                成都曼同文化传播有限公司 版权所有
            </p>
        </div>
    </div>  
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    /*联系方式*/
    .contact-info {
        position: relative;
        color: #fff;
        width: 100%;
        height: 500px;
        background-color: #3A3A3A;
        .clearfix {
            position: relative;
            width: 1000px;
            margin: auto;
            overflow: hidden;
            zoom: 1;
            padding: 40px 0;
            .left {
                float: left;
                // margin-left: 10px;
                h3 {
                    margin: 10px auto;
                }
                .ewm {
                    display: inline-block;
                    width: 140px;
                    height: 140px;
                    background: url('../assets/img/index/wechat.jpeg') center no-repeat;
                    background-size: contain;
                }
                .address {
                    display: inline-block;
                    width: 400px;
                    height: 140px;
                    background: url('../assets/img/index/address.png') center no-repeat;
                    background-size: contain;
                }
            }
            .right {
                float: right;
                // margin-right: 75px;
                h3 {
                    margin: 10px auto;
                }
                p {
                    color: #999999;
                    font-size: 14px;
                    width: 350px;
                    height: 30px;
                    line-height: 30px;
                    margin: auto;
                }
                a {
                    color: #999999;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            .copyright {
                font-size: 14px;
                line-height: 30px;
                color: #999999;
            }
        }
        .clearfix.copy {
            border-top: 1px solid rgba(151,151,151,0.2);
            padding-top: 20px;
        }
    }
</style>
