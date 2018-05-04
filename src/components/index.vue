<template>
    <div class="mindon-index">
        <!--吸顶头部-->
        <div class="header">
            <div class="logo-nav">
                <div class="logo">
                    <a href="" class="logo-img"></a>
                    <a href="" class="logo-des"></a>
                </div>
                <div class="nav">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">曼.成员</template>
                            <el-menu-item index="2-1">六十度餐饮</el-menu-item>
                            <el-menu-item index="2-2">墨饰居</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">经典案例</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">关于我们</a></el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>

        <!--首屏轮播-->
        <div class="banner">
            <el-carousel :interval="4000" height="390px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <img src="../assets/img/index/banner.png" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>


        <!-- about us -->
        <div class="about-us">
            <div class="team">
                <h3>关于我们</h3>
                <h6>Companies to introduce</h6>
                <el-row>
                    <el-col :span="8">
                        <img src="../assets/img/index/about/about_img1.png" alt="">
                    </el-col>
                    <el-col :span="16">
                        <p>成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司成都曼同文化传播有限公司</p>
                    </el-col>
                </el-row>
            </div>
            <div class="to-customers">
                <div class="detail">
                    <h4>至亲爱的您</h4>
                    <h5>Companies to introduce</h5>
                    <el-row>
                        <el-col :span="16">
                            <p>谢谢您的停留。我们（企业）的成长过程中，有许多重要时刻希望与我们的朋友家人分享，感恩生命的给予，谢谢一路的帮扶关照支持。未来希望我们仍能携手向前。这些在我们（企业）生命中的特殊时刻，仪式（活动）成了这一刻必不可少部分，让生活充满仪式感，是我们最浪漫的追求。</p>
                            <p>巧妙的布景，合适的氛围，完美的体验共同组成一场高品质的仪式（活动）。这其中需要策划提供足够的创意支持，需要高素质执行人员提供高标准的服务，需要项目经理对细节的严苛把控。任一环节的缺失都可能带来遗憾。</p>
                            <p>我们的团队，有从业10年以上伙伴，有刚刚毕业的大学同学，活力、创新、经验三者相互碰撞在我们中间产生了有趣的火花。我们共同的目标是用高于行业的标准来呈现仪式（活动）。</p>
                        </el-col>
                        <el-col :span="8">
                            <img src="../assets/img/index/about/about_img2.png" alt="">
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <!--案例-->
        <div class="mindon-index-case">
            <!-- <p class="title">案例展示</p> -->
            <div class="case-box" v-for="(caseInfo, index) in caseList" :class="{odd: index%2 != 0}">
                <div class="case-list">
                    <b>{{caseInfo.title}}</b>
                    <ul class="sort-list">
                        <li v-for="(sort, index) in caseInfo.sortList"><a href="" :class="{first: index === 0}">{{sort}}</a></li>
                    </ul>
                </div>
                <a class="case-demo" :class="{first: index===0}" href="" v-for="(caseDetail, index) in caseInfo.detail">
                    <img :src="caseDetail.imgURL" alt="">
                    <p>{{caseDetail.caseTitle}}</p>
                </a>
            </div>
        </div>


        <!--最新资讯-->
        <div class="news">
            <!-- <p class="title">最新资讯</p> -->
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
            <a href="javascript: void(0)" class="QQ"></a>
            <a href="javascript: void(0)" class="QR-code"></a>
            <a href="javascript: void(0)" class="back-top" @click="backTop"></a>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data: function () {
            return {
                activeIndex: '1',
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
            },
            backTop: function() {
                let gotoTop = function() {
                    let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                    let speed = Math.floor(-currentPosition / 6);
                    if (currentPosition === 0) {
                        clearInterval(timer)
                    }
                    document.documentElement.scrollTop = document.body.scrollTop = currentPosition + speed;
                };
                let timer = setInterval(gotoTop, 30);
            }
        }
    }
</script>
<style lang="less" scoped>
    * {
        box-sizing: border-box;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    ul {
        margin: auto;
        padding: 0;
        li {
            list-style: none;
        }
    }
    p {
        margin: auto;
    }
    a {
        text-decoration: none;
    }
    
    // 头部
    .header {
        position: fixed;
        width: 100%;
        border-bottom: solid 1px #444;
        background-color: #333;
        z-index: 999;
        font-size: 0;
        color: #333;
        .logo-nav {
            width: 1190px;
            margin: auto;
            // padding: 15px 0 15px;
        }

        .logo {
            font-size: 20px;
            display: inline-block;
            vertical-align: top;
            .logo-img {
                display: inline-block;
                vertical-align: top;
                width: 60px;
                height: 60px;
                background: url("../assets/img/index/logo.png") 0 0 no-repeat;
                background-size: contain;
            }
            .logo-des {
                display: inline-block;
                vertical-align: top;
                width: 145px;
                height: 60px;
                background: url('../assets/img/index/mindon-logo-des.png') center 20px no-repeat;
                background-size: contain;
            }
        }
        .nav {
            float: right;
        }
    }

    // 轮播
    .banner {
        height: 450px;
        margin: auto;
        padding-top: 60px;
        img {
            width: 100%;
        }
    }

    /*关于我们*/
    .about-us {
        p {
            line-height: 28px;
            color: #666;
            font-size: 14px;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            text-indent: 2em;
        }
        .team {
            width: 1100px;
            margin: auto;
            padding: 40px 0;
            h3, h6 {
                font-weight: normal;
                font-size: 28px;
                margin: 20px auto 15px;
                color: #444;
                padding-left: 100px;
            }
            h6 {
                font-size: 18px;
            }
        }
        .to-customers {
            padding: 40px 0;
            background-color: #fafafa;
            .detail {
                width: 1110px;
                margin: auto;
                h4, h5 {
                    font-weight: normal;
                    font-size: 28px;
                    margin: 10px auto 15px;
                    color: #444;
                    text-align: right;
                    padding-right: 110px;
                }
                h5 {
                    font-size: 18px;
                }
                img {
                    float: right;
                }
            }
        }
    }

    /*案例*/
    .mindon-index-case {
        position: relative;
        width: 100%;
        overflow: hidden;
        font-size: 0;
        zoom: 1;
        background-color: #f5f5f5;
        padding-top: 50px;
        .title {
            font-size: 28px;
            text-align: center;
        }
        .case-box {
            width: 1190px;
            margin: auto;
            padding: 0 0 50px 0;
        }
        .case-list {
            position: relative;
            margin: 10px 0;
            overflow: hidden;
            zoom: 1;
            b {
                position: relative;
                height: 20px;
                line-height: 20px;
                font-size: 20px;
                color: #333;
                display: inline-block;
            }
            .sort-list {
                display: inline-block;
                font-size: 14px;
                position: absolute;
                right: 0;
                top: 0;
                li {
                    display: inline-block;
                    margin-left: 30px;
                    line-height: 18px;
                    color: #666;
                    a {
                        display: block;
                        text-decoration: none;
                        color: #333;
                        &.first {
                            color: #0089fd;
                            border-bottom: solid 2px #0089fd;
                        }
                        &:hover {
                            color: #0089fd;
                            border-bottom: solid 2px #0089fd;
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
        background-color: #333333;
        // &:after {
        //     display: block;
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     overflow: hidden;
        //     content: url("../assets/img/index/banner.png");
        //     z-index: -1;
        // }
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
            background: url("../assets/img/index/footer/iPhoneX.png") center no-repeat;
            background-size: contain;
        }
        .address:before {
            background: url("../assets/img/index/footer/address.png") center no-repeat;
            background-size: contain;
        }
        .email:before {
            background: url("../assets/img/index/footer/email.png") center no-repeat;
            background-size: contain;
        }
    }

    .contact-qq {
        position: fixed;
        z-index: 999;
        width: 60px;
        height: 150px;
        float: right;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto 5px;
        a {
            display: block;
            width: 50px;
            height: 50px;
            text-align: center;
            text-decoration: none;
            background-color: #333 !important;
            color: #fff;
            font-size: 12px;
            line-height: 60px;
            margin-top: 1px;
            border-radius: 3px;
            background-size: 45% !important;
            &:hover {
                background-color: rgb(41, 41, 41) !important;
            }
        }
        .QQ {
            background: url('../assets/img/index/qqContact.png') center no-repeat
        }
        .QR-code {
            background: url('../assets/img/index/phoneContact.png') center no-repeat
        }
        .back-top {
            background: url('../assets/img/index/backToTop.png') center no-repeat
        }
    }
</style>