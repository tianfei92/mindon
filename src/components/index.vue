<template>
    <div class="mindon-index">
        <!--吸顶头部-->
        <div class="header">
            <div class="info">
                <a href="" class="logo"></a>
                <b>成都曼同文化传播有限公司</b>
                <b class="contact-number">联系电话：13608348361</b>
            </div>
            <div class="nav">
                <a href="" class="index">首页</a>
                <a href="" class="">案例展示</a>
                <a href="" class="">关于我们</a>
            </div>
        </div>
        <!--首屏轮播-->
        <div ref="swiper" class="swiper-container">
            <div class="carousel swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/img/index/1.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/index/1.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/index/1.jpg" alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>

        <!--内容区-->
        <div class="content">
            <!--案例-->
            <p class="title">案例展示</p>
            <div class="mindon-index-case" v-for="caseInfo in caseList">
                <div class="case-list">
                    <b>{{caseInfo.title}}</b>
                    <ul class="sort-list">
                        <li v-for="sort in caseInfo.sortList"><a href="">{{sort}}</a></li>
                    </ul>
                </div>
                <a class="case-demo" :class="{first: index===0}" href="" v-for="(caseDetail, index) in caseInfo.detail">
                    <img :src="caseDetail.imgURL" alt="">
                    <p>{{caseDetail.caseTitle}}</p>
                </a>
            </div>

            <!--方案文案-->
            <div class="case-content">
                <p class="title">方案文案</p>
                <p></p>
            </div>

            <!--关于我们-->
            <div class="about-us">
                <p class="title">关于我们</p>
                <p></p>
            </div>
            <!--餐饮、花链接-->
            <!--关于我们-->
            <div class="link-details">
                <p class="title">餐饮链接</p>
                <p></p>
            </div>

            <!--最新资讯-->
            <div class="news">
                <p class="title">最新资讯</p>
            </div>
        </div>
        <!--详细联系方式-->
        <div class="contact-info">
            <p class="title">联系方式</p>
            <p class="tel-num">13608348361</p>
            <p class="address">重庆市渝北区两江新区互联网产业园</p>
            <p class="email">295418156@qq.com</p>
        </div>

        <!--QQ、二维码导航-->
        <div class="contact-qq">
            <a href="">QQ</a>
            <a href="">二维码</a>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data: function () {
            return {
                caseList: [
                    {
                        title: '会务',
                        sortList: ['经销商会', '新品发布会', '启动仪式', '答谢会', '年会', '研究会'],
                        detail: [
                            {imgURL: require('../assets/img/index/huiwu/luhu.jpg'), caseTitle: '路虎新品发布会'},
                            {imgURL: require('../assets/img/index/huiwu/jipu.jpg'), caseTitle: '吉普新品发布会'},
                            {imgURL: require('../assets/img/index/huiwu/dema.jpg'), caseTitle: '德玛西亚英雄联盟'},
                        ]
                    },
                    {
                        title: '庆典',
                        sortList: ['开业', '乔迁', '周年庆', '节日'],
                        detail: [
                            {imgURL: require('../assets/img/index/qingdian/meikemeijia.jpg'), caseTitle: '美克美家开业典礼'},
                            {imgURL: require('../assets/img/index/qingdian/year.jpg'), caseTitle: '10年之约婚礼'},
                            {imgURL: require('../assets/img/index/qingdian/zhongshihunli.jpg'), caseTitle: '中式婚礼'},
                        ]
                    },
                    {
                        title: '展示展览',
                        sortList: ['糖酒会', '房交会', '车展', '人才交流会'],
                        detail: [
                            {imgURL: require('../assets/img/index/zszl/xinhua.png'), caseTitle: '新华三展示区'},
                            {imgURL: require('../assets/img/index/zszl/tjhwc.jpg'), caseTitle: '糖酒会外场'},
                            {imgURL: require('../assets/img/index/zszl/tjhnc.png'), caseTitle: '糖酒会内场'},
                        ]
                    },
                    {
                        title: '派对',
                        sortList: ['生日宴', '宝宝宴', '朋友聚会', '时尚轰趴'],
                        detail: [
                            {imgURL: require('../assets/img/index/party/baobao.jpeg'), caseTitle: '粉色梦幻宝宝宴'},
                            {imgURL: require('../assets/img/index/party/haiyang.jpg'), caseTitle: '海洋主题宝宝宴'},
                            {imgURL: require('../assets/img/index/party/heijin.jpg'), caseTitle: '黑金饭盒主题轰趴'},
                        ]
                    }
                ]
            }
        },
        mounted() {
            this.initSwiper();
        },
        methods: {
            //首屏轮播
            initSwiper: function () {
                let mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: true,
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    * {
        box-sizing: border-box;
    }
    ul {
        margin: auto;
        padding: 0;
        li {
            list-style: none;
        }
    }
    
    .header {
        position: fixed;
        width: 100%;
        /*height: 60px;*/
        line-height: 60px;
        border-bottom: solid 1px #eee;
        background-color: rgba(255, 255, 255, 0.9);
        /*background-color: rgba(0, 0, 0, 0.8);*/
        z-index: 999;
        /*box-shadow: 1px 1px 3px #eee;*/
        font-size: 0;
        color: #333;
        /*background: linear-gradient(left, rgba(114, 160, 154, 0.8), rgba(255, 77, 43, 0.95));*/
        /*background: -moz-linear-gradient(left, rgba(0,0,0,0.8), rgba(0,0,0,0.2));*/
        /*background: -o-linear-gradient(left, rgba(0,0,0,0.8), rgba(0,0,0,0.2));*/
        /*background: -webkit-linear-gradient(left, rgba(114, 160, 154, 0.8), rgba(180, 241, 255, 0.95));*/
        .info {
            font-size: 20px;
            width: 1190px;
            margin: auto;
            .logo {
                display: inline-block;
                vertical-align: top;
                width: 80px;
                height: 60px;
                margin-right: 10px;
                background: url("../assets/img/index/logo.png") center no-repeat;
                background-size: contain;
            }
            b {
                display: inline-block;
                vertical-align: top;
                margin-top: 5px;
            }
            .contact-number {
                float: right;
                color: #ff6900;
            }
        }
        .nav {
            width: 1190px;
            height: 30px;
            line-height: 30px;
            margin: auto;
            .index {
                color: #0089fd;
            }
            a {
                text-decoration: none;
                font-size: 18px;
                color: #6f7180;
                display: inline-block;
                vertical-align: top;
                margin-right: 20px;
                line-height: 25px;
                &:hover {
                    color: #0089fd;
                }
            }
        }
    }
    .swiper-container {
        /*width: 1190px;*/
        height: 400px;
        margin: auto;
        padding-top: 95px;
        img {
            width: 100%;
        }
    }

    .content {
        width: 1190px;
        margin: 20px auto;
        padding-top: 60px;
    }
    /*案例*/
    .title {
        font-size: 28px;
        text-align: center;
    }
    .mindon-index-case {
        position: relative;
        width: 100%;
        margin: 15px 0 50px 0;
        overflow: hidden;
        font-size: 0;
        zoom: 1;
        .case-list {
            position: relative;
            margin-top: 10px;
            overflow: hidden;
            zoom: 1;
            b {
                position: relative;
                font-size: 30px;
                color: #333;
                display: inline-block;
            }
            .sort-list {
                display: inline-block;
                font-size: 14px;
                float: right;
                li {
                    display: inline-block;
                    padding-left: 10px;
                    line-height: 18px;
                    margin-top: 10px;
                    color: #666;
                    a {
                        display: block;
                        text-decoration: none;
                        color: #666;
                        &:hover {
                            color: #0089fd;
                            text-decoration: #409eff;
                        }
                    }
                }
            }
        }

        .case-demo {
            display: inline-block;
            position: relative;
            vertical-align: top;
            height: 200px;
            border: solid 1px #eee;
            width: 390px;
            margin: 10px 0 0 10px;
            background-color: #fff;
            overflow: hidden;
            &.first {
                margin-left: 0;
            }
            &:hover {
                /*border: solid 1px;*/
                padding: 0;
                transform: translateY(-2%);
                transition: all 0.5s;
                box-shadow: 1px 4px 10px 2px #CCC;
                -webkit-box-shadow: 1px 4px 10px 2px #CCC;
                -moz-box-shadow: 1px 4px 10px 2px #CCC;
            }
            img {
                max-width: 100%;
            }
            p {
                position: absolute;
                bottom: 0;
                height: 50px;
                line-height: 50px;
                width: 100%;
                margin: auto;
                background-color: rgba(0, 0, 0, 0.5);
                color: #fff;
                text-align: center;
                font-size: 20px;
            }
        }
    }

    /*关于我们*/
    .about-us {
        .title {
            font-size: 28px;
            text-align: center;
        }
    }

    /*最新资讯*/
    .news {
        .title {
            font-size: 28px;
            text-align: center;
        }
    }

    /*联系方式*/
    .contact-info {
        padding-top: 30px;
        position: relative;
        color: #fff;
        width: 100%;
        height: 300px;
        background-color: rgba(0,0,0,0.7);
        &:after {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            content: url("../assets/img/index/1.jpg");
            z-index: -1;
        }
        .title {
            text-align: center;
            font-size: 28px;
        }
        .tel-num, .address, .email {
            width: 350px;
            height: 40px;
            line-height: 40px;
            margin: auto;
            font-size: 18px;
            &:before {
                content: '';
                display: inline-block;
                vertical-align: middle;
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
        }
        .tel-num:before {
            background: url("../assets/img/index/iPhoneX.png") center no-repeat;
            background-size: contain;
        }
        .address:before {
            background: url("../assets/img/index/address.png") center no-repeat;
            background-size: contain;
        }
        .email:before {
            background: url("../assets/img/index/email.png") center no-repeat;
            background-size: contain;
        }
    }

    .contact-qq {
        position: fixed;
        width: 60px;
        height: 150px;
        float: right;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto 5px;
        a {
            display: block;
            width: 60px;
            height: 60px;
            text-align: center;
            text-decoration: none;
            background-color: #3a8ee6;
            color: #fff;
            line-height: 60px;
            margin-top: 3px;
            border-radius: 5px;
            &:hover {
                background-color: #007aff;
            }
        }
    }
</style>