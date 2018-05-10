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
                        <el-menu-item index="1" @click="scrollTo('#app')">首页</el-menu-item>
                        <el-menu-item index="2" @click="scrollTo('#m-case')">经典案例</el-menu-item>
                        <el-menu-item index="3" @click="scrollTo('#m-device')">舞美音响</el-menu-item>
                        <el-menu-item index="4" @click="scrollTo('#m-photography')">摄影摄像</el-menu-item>
                        <el-menu-item index="5" @click="scrollTo('#m-model')">模特礼仪</el-menu-item>
                        <el-submenu index="6">
                            <template slot="title">曼.成员</template>
                            <el-menu-item index="6-1">六十度餐饮</el-menu-item>
                            <el-menu-item index="6-2">墨饰居</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="7" @click="scrollTo('#m-about-us')">关于我们</el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>

        <!--首屏轮播-->
        <div class="banner">
            <el-carousel :interval="4000" height="450px">
                <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                    <!-- <img :src="item.imgURL" alt=""> -->
                    <div class="banner_img" :style="{background: 'url('+item.imgURL+') center no-repeat'}"></div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <!--案例-->
        <div class="mindon-index-case" id="m-case">
            <div class="floorhd"><div class="grid_c1 floorhd_inner"><h3 class="floorhd_tit">经典案例</h3></div></div>
            <div class="case-box" v-for="(caseInfo, index) in caseList" :class="{odd: index%2 != 0}" :key="index">
                <div class="case-list">
                    <h5>{{caseInfo.title}}</h5>
                    <ul class="sort-list">
                        <li v-for="(sort, index) in caseInfo.sortList" :key="index"><a href="/case/detail" :class="{first: index === 0}">{{sort}}</a></li>
                    </ul>
                </div>
                <a class="case-demo" :class="{first: index===0}" href="/case/detail" v-for="(caseDetail, index) in caseInfo.detail" :key="index">
                    <div class="m-case-pic"><img :src="caseDetail.imgURL" alt=""></div>
                    <div class="m-case-avart" :style="{background: 'url(' + caseDetail.imgURL + ') center no-repeat'}"></div>
                    <h6>{{caseDetail.caseTitle}}</h6>
                    <p>这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述</p>
                </a>
            </div>
        </div>


        <!-- 设备中心 -->
        <div class="m-device" id="m-device">
            <div class="floorhd"><div class="grid_c1 floorhd_inner"><h3 class="floorhd_tit">舞美音响</h3></div></div>
            <div class="list">
                <el-container>
                    <el-aside width="200px">
                        <el-menu :default-openeds="['1']" :default-active="activeIndex" @select="handleSelect">
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-service"></i>设备中心</template>
                                <el-menu-item index="1-0">灯光</el-menu-item>
                                <el-menu-item index="1-1">音响</el-menu-item>
                                <el-menu-item index="1-2">屏幕</el-menu-item>
                                <el-menu-item index="1-3">控制台</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                    <el-container>
                        <el-row :gutter="20" style="width: 100%" v-for="(deviceList, index) in deviceSortList" :key="index" v-show="deviceShowIndex === index">
                            <el-col :span="8" v-for="device in deviceList" :key="device.Id">
                                <div class="grid-content"><img :src="device.imgURL" alt=""><p>{{device.title}}</p></div>
                            </el-col>
                        </el-row>
                    </el-container>
                </el-container>
            </div>
        </div>

        <!-- 摄影摄像 -->
        <div class="m-photography" id="m-photography">
            <div class="floorhd"><div class="grid_c1 floorhd_inner"><h3 class="floorhd_tit">摄影摄像</h3></div></div>
            <div class="tips"><p>我公司提供国内A级摄影摄像团队、摄影单反、摄像机、摇臂、航拍机等摄影摄像器材。摄影摄像含后期调色修饰及视频剪辑等。以下图片是本公司演出资源，更多资源请电话联系</p></div>
            <div class="list">
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/photography/timg-17.png" alt=""><p>单反相机</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/photography/timg-18.png" alt=""><p>摄像机</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/photography/timg-19.png" alt=""><p>航拍机</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/photography/timg-20.png" alt=""><p>摇臂</p></div></el-col>
                </el-row>
            </div>
        </div>

        <!-- 模特礼仪 -->
        <div class="m-model" id="m-model">
            <div class="floorhd"><div class="grid_c1 floorhd_inner"><h3 class="floorhd_tit">模特礼仪</h3></div></div>
            <div class="tips"><p>我公司提供国内A级模特礼仪，国内男模女模、外籍模特、外籍乐队，以下图片是部分我公司演出资源，更多资源请电话联系。</p></div>
            <div class="list">
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/model/model_1.png" alt=""><p>国内女模</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/model/model_2.png" alt=""><p>外籍女模</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/model/model_3.png" alt=""><p>国内男模</p></div></el-col>
                    <el-col :span="6"><div class="grid-content"><img src="../assets/img/index/model/model_4.png" alt=""><p>外籍乐队</p></div></el-col>
                </el-row>
            </div>
        </div>


        <!-- about us -->
        <div class="about-us" id="m-about-us">
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
        </div>

        <!--详细联系方式-->
        <div class="contact-info" id="m-contact">
            <p class="title">联系方式</p>
            <p class="tel-num">13608348361</p>
            <p class="address">重庆市渝北区两江新区互联网产业园</p>
            <p class="email">295418156@qq.com</p>
        </div>

        <!--QQ、二维码导航-->
        <div class="contact-nav">
            <div class="nav">
                <a href="javascript: void(0)" class="phone"></a>
                <span>电话：18008091258</span>
            </div>
            <div class="nav">
                <a href="javascript: void(0)" class="WeChat"></a>
                <div class="m-w">
                    <img src="../assets/img/index/Wechat.jpeg" alt="">
                    <span>微信二维码</span>
                </div>
            </div>
            <div class="nav">
                <a href="javascript: void(0)" class="QQ"></a>
                <span>QQ：1137333869</span>
            </div>
            <div class="nav no-need">
                <a href="javascript: void(0)" class="back-top" @click="scrollTo('#app')"></a>
            </div>
        </div>

        <div class="footer" :class="{load:pageLoaded === true}">
            
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
                deviceShowIndex: 0,
                pageLoaded: false,
                bannerList: [
                    {imgURL: require('../assets/img/index/banner/banner_1.jpg')},
                    {imgURL: require('../assets/img/index/banner/banner_2.jpg')},
                    {imgURL: require('../assets/img/index/banner/banner_3.jpg')},
                    {imgURL: require('../assets/img/index/banner/banner_4.jpg')}
                ],
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
                ],
                deviceSortList: [
                    [
                        {imgURL: require('../assets/img/index/device/d_1.jpg'), title: '粉色梦幻宝宝宴'},
                        {imgURL: require('../assets/img/index/device/d_2.jpg'), title: '海洋主题宝宝宴'},
                        {imgURL: require('../assets/img/index/device/d_3.jpg'), title: '黑金饭盒主题轰趴'},
                        {imgURL: require('../assets/img/index/device/d_4.jpg'), title: '黑金饭盒主题轰趴'},
                        {imgURL: require('../assets/img/index/device/d_5.jpg'), title: '黑金饭盒主题轰趴'},
                        {imgURL: require('../assets/img/index/device/d_6.jpg'), title: '黑金饭盒主题轰趴'},
                    ],
                    [
                        {imgURL: require('../assets/img/index/device/y_1.jpg'), title: '粉色梦幻宝宝宴'},
                        {imgURL: require('../assets/img/index/device/y_2.jpg'), title: '海洋主题宝宝宴'},
                        {imgURL: require('../assets/img/index/device/y_3.jpg'), title: '黑金饭盒主题轰趴'},
                        {imgURL: require('../assets/img/index/device/y_4.jpg'), title: '粉色梦幻宝宝宴'},
                        {imgURL: require('../assets/img/index/device/y_5.jpg'), title: '海洋主题宝宝宴'},
                        {imgURL: require('../assets/img/index/device/y_6.jpg'), title: '黑金饭盒主题轰趴'},
                    ],
                    [
                        {imgURL: require('../assets/img/index/device/p_1.jpg'), title: '粉色梦幻宝宝宴'},
                        {imgURL: require('../assets/img/index/device/p_2.jpg'), title: '海洋主题宝宝宴'},
                        {imgURL: require('../assets/img/index/device/p_3.jpg'), title: '黑金饭盒主题轰趴'},
                    ],
                    [
                        {imgURL: require('../assets/img/index/device/t_1.jpg'), title: '粉色梦幻宝宝宴'},
                        {imgURL: require('../assets/img/index/device/t_2.jpg'), title: '海洋主题宝宝宴'},
                        {imgURL: require('../assets/img/index/device/t_3.jpg'), title: '黑金饭盒主题轰趴'},
                        {imgURL: require('../assets/img/index/device/t_4.jpg'), title: '黑金饭盒主题轰趴'},
                        {imgURL: require('../assets/img/index/device/t_5.jpg'), title: '黑金饭盒主题轰趴'},
                    ]
                ]
            }
        },
        mounted() {
            this.initSwiper();
        },
        updated() {
            let self = this;
            setTimeout(function(){
                self.pageLoaded = true;
            }, 1000)
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
            handleSelect: function(index, indexPath) {
                this.deviceShowIndex = Number(index.split('-')[1])
            },
            scrollTo: function(ele) {
                $('html,body').animate({scrollTop:$(ele).offset().top - 60}, 800)
            }
        }
    }
</script>
<style lang="less" scoped src="./index.less"></style>