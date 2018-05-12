<template>
    <!--详细联系方式-->
    <div class="contact-info" id="m-contact">
        <div class="clearfix">
            <div class="left">
                <h3>成都曼同文化传播有限公司</h3>
                <div class="ewm"></div>
            </div>
            <div class="right">
                <h3>联系方式</h3>
                <p class="tel-num">客服电话：180-0809-1258</p>
                <p class="email">商务合作：<a href="mailto:1137333869@qq.com">1137333869@qq.com</a></p>
                <p class="address">地址：重庆市渝北区两江新区互联网产业园</p>
                <p>服务时间：周一至周日 10:00-19:00</p>
            </div>
        </div>
        <div class="clearfix copy">
            <p class="copyright">
                Copyright @ 2006-2017 京ICP备11048047号-3
                <br>
                曼同（成都）文化传播有限公司 版权所有
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
                margin-left: 10px;
                h3 {
                    margin: 10px auto;
                }
                .ewm {
                    width: 120px;
                    height: 120px;
                    background: url('../assets/img/index/wechat.jpeg') center no-repeat;
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
