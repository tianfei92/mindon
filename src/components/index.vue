<template>
    <div class="mindon-index">
        <!--吸顶头部-->
        <div class="header">
            <div class="info">
                <a href="" class="logo"></a>
                <b>成都曼同文化传播有限公司</b>
                <b class="contact-number">联系电话：13608348361</b>
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
            <div class="mindon-index-case" v-for="caseInfo in caseList">
                <div class="left-info">
                    <div class="case-title"><b>{{caseInfo.title}}</b></div>
                    <ul class="sort-list">
                        <li v-for="sort in caseInfo.sortList"><a href="">{{sort}}</a></li>
                    </ul>
                </div>
                <a class="case-demo" href="" v-for="caseDetail in caseInfo.detail">
                    <img src="../assets/img/index/2.jpg" alt="">
                    <p>案例</p>
                </a>
            </div>
            <!--关于我们-->
            <div class="about-us">
                <p class="title">关于我们</p>
                <p></p>
            </div>
            <!--餐饮、花链接-->
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
                            {imgURL: ''},
                            {imgURL: ''},
                            {imgURL: ''}
                        ]
                    },
                    {
                        title: '庆典',
                        sortList: ['开业', '乔迁', '周年庆', '特殊成就', '节日'],
                        detail: [
                            {imgURL: ''},
                            {imgURL: ''},
                            {imgURL: ''}
                        ]
                    },
                    {
                        title: '展示展览',
                        sortList: ['糖酒会', '房交会', '车站', '人才交流'],
                        detail: [
                            {imgURL: ''},
                            {imgURL: ''},
                            {imgURL: ''}
                        ]
                    },
                    {
                        title: '派对',
                        sortList: ['生日宴', '宝宝宴', '朋友聚会', '时尚轰趴'],
                        detail: [
                            {imgURL: ''},
                            {imgURL: ''},
                            {imgURL: ''}
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
        height: 60px;
        line-height: 60px;
        border-bottom: solid 1px #eee;
        background-color: rgba(255, 255, 255, 0.9);
        /*background-color: rgba(0, 0, 0, 0.8);*/
        z-index: 999;
        /*box-shadow: 1px 1px 3px #eee;*/
        font-size: 20px;
        color: #333;
        /*background: linear-gradient(left, rgba(114, 160, 154, 0.8), rgba(255, 77, 43, 0.95));*/
        /*background: -moz-linear-gradient(left, rgba(0,0,0,0.8), rgba(0,0,0,0.2));*/
        /*background: -o-linear-gradient(left, rgba(0,0,0,0.8), rgba(0,0,0,0.2));*/
        /*background: -webkit-linear-gradient(left, rgba(114, 160, 154, 0.8), rgba(180, 241, 255, 0.95));*/
        .info {
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
            }
        }
    }
    .swiper-container {
        /*width: 1190px;*/
        height: 400px;
        margin: auto;
        padding-top: 60px;
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
    .mindon-index-case {
        position: relative;
        width: 100%;
        margin-top: 15px;
        overflow: hidden;
        font-size: 0;
        zoom: 1;
        .left-info {
            position: relative;
            display: inline-block;
            vertical-align: top;
            height: 200px;
            margin-top: 10px;
            /*background: linear-gradient(left, #3dc1ff, lightskyblue);*/
            /*background: -moz-linear-gradient(left, #3dc1ff, lightskyblue);*/
            /*background: -o-linear-gradient(left, #3dc1ff, lightskyblue);*/
            /*background: -webkit-linear-gradient(left, #3dc1ff, lightskyblue);*/
            background-color: rgba(0, 0, 0, 0.7);
            &:after {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                content: '';
                background: url("../assets/img/index/qingdian.jpg") center no-repeat;
                background-size: contain;
                z-index: -1;
            }
        }
        .case-title, .sort-list, .case-demo {
            display: inline-block;
            vertical-align: top;
            height: 200px;
        }
        .case-title {
            position: relative;
            width: 50px;
            text-align: center;
            font-size: 30px;
            color: #fff;
            border-right: solid 1px #fff;
            b {
                position: absolute;
                width: 100%;
                height: 170px;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        }
        .sort-list {
            width: 150px;
            font-size: 14px;
            li {
                padding-left: 10px;
                line-height: 18px;
                margin-top: 10px;
                color: #fff;
                a {
                    display: block;
                    text-decoration: none;
                    color: #fff;
                }
            }
        }
        .case-demo {
            position: relative;
            border: solid 1px #eee;
            width: 300px;
            margin: 10px 0 0 30px;
            background-color: #fff;
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
</style>