<template>
    <div class="mindon-index">
        <!--吸顶头部-->
        <div class="header">
            <div class="logo-nav">
                <div class="logo">
                    <router-link to="/" class="logo-img"></router-link>
                    <router-link to="/" class="logo-des"></router-link>
                    <!-- <a href="/" class="logo-img"></a>
                    <a href="/" class="logo-des"></a> -->
                </div>
                <span class="tel">180-0809-1258</span>  
                <div class="nav">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
                        <el-menu-item index="1" @click="scrollTo('#app')">首页</el-menu-item>
                        <el-menu-item index="2" @click="scrollTo('#m-case')">经典案例</el-menu-item>
                        <el-menu-item index="3" @click="scrollTo('#m-device')">舞美音响</el-menu-item>
                        <el-menu-item index="4" @click="scrollTo('#m-photography')">摄影摄像</el-menu-item>
                        <el-menu-item index="5" @click="scrollTo('#m-model')">模特礼仪</el-menu-item>
                        <!-- <el-submenu index="6">
                            <template slot="title">曼.成员</template>
                            <el-menu-item index="6-1"><a target="_blank" href="http://www.ok60du.com/">六十度餐饮</a></el-menu-item>
                            <el-menu-item index="6-2"><a target="_blank" href="http://www.moshiju.com/">墨饰居</a></el-menu-item>
                        </el-submenu> -->
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
        <div class="features">
            <ul class="features-content">
                <li class="feature_1"><h3>一站式服务</h3><p>提供场地、策划与餐饮整套解决方案</p></li>
                <li class="feature_2"><h3>亮点鲜明</h3><p>确保策划活动至少有两个以上亮点</p></li>
                <li class="feature_3"><h3>精美策划案定制</h3><p>预定即定制方案</p></li>
                <li class="feature_4"><h3>十年执行经验</h3><p>曼成员拥有十年以上大型活动执行经验</p></li>
            </ul>
        </div>

        <!--案例-->
        <div class="mindon-index-case" id="m-case">
            <div class="floorhd"><div class="grid_c1 floorhd_inner"><h3 class="floorhd_tit">经典案例</h3></div></div>
            <div class="case-box" v-for="(caseInfo, index) in caseList" :class="{odd: index%2 != 0}" :key="index">
                <div class="case-list">
                    <h5>{{caseInfo.title}}</h5>
                    <ul class="sort-list">
                        <li v-for="(sort, index) in caseInfo.sortList" :key="index">
                            <!-- <router-link to="/case/detail" :class="{first: index === 0}">{{sort}}</router-link> -->
                            <a href="javascript: void(0)" :class="{first: index === 0}">{{sort}}</a>
                        </li>
                    </ul>
                </div>
                <router-link :to="{path: '/case/detail?id=' + caseDetail.id}" class="case-demo" :class="{first: index===0}" v-for="(caseDetail, index) in caseInfo.detail" :key="index">
                    <div class="m-case-pic"><img :src="caseDetail.imgURL" alt=""></div>
                    <div class="m-case-avart" :style="{background: 'url(' + caseDetail.imgURL + ') center no-repeat'}"></div>
                    <h6>{{caseDetail.caseTitle}}</h6>
                    <p>{{caseDetail.caseContent}}</p>
                </router-link>
                <!-- <a class="case-demo" :class="{first: index===0}" href="/case/detail" v-for="(caseDetail, index) in caseInfo.detail" :key="index">
                    <div class="m-case-pic"><img :src="caseDetail.imgURL" alt=""></div>
                    <div class="m-case-avart" :style="{background: 'url(' + caseDetail.imgURL + ') center no-repeat'}"></div>
                    <h6>{{caseDetail.caseTitle}}</h6>
                    <p>这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述</p>
                </a> -->
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
            <div class="tips"><p>我公司提供国内A级摄影摄像团队、摄影单反、摄像机、摇臂、航拍机等摄影摄像器材。摄影摄像含后期调色修饰及视频剪辑等。以下图片是本公司演出资源，更多资源请电话联系。</p></div>
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
                    <h4>致亲爱的您</h4>
                    <h5>A letter for you</h5>
                    <el-row>
                        <el-col :span="16">
                            <p>谢谢您的停留。我们的成长过程中，有许多重要时刻希望与我们的朋友家人分享，感恩生命的给予，谢谢一路的帮扶关照支持。未来希望我们仍能携手向前。这些在我们生命中的特殊时刻，仪式（活动）成了这一刻必不可少部分，让生活充满仪式感，是我们最浪漫的追求。</p>
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
                <h6>About us</h6>
                <el-row>
                    <el-col :span="8">
                        <img src="../assets/img/index/about/about_img1.png" alt="">
                    </el-col>
                    <el-col :span="16">
                        <p>成都曼同文化传播有限公司旗下品牌Mindon曼·策划，随着活动策划市场需求连年增长，市场对于高端策划的需求越发强烈，2017年，创始人团队以合伙制形式，组建策划品牌Mindon曼·策划，团队成员拥有10年的大型活动策划执行经验，同时也吸纳了高素质年轻一代策划师，定位于各类高端活动策划。团队整体策划水平，创新意识深受精英客户群好评。</p>
                        <p>Mindon意于精神粒子，心灵感应粒子。我们期望倾听客户的声音，能与客户心有灵犀。用心去营造合适的氛围，让产品拥有厚度，拥有震撼人心的力量，完美的体验是我们不懈的追求。</p>
                        <p>我们坚信自由、平等、开放、人性化的工作环境是创造力的源泉。热爱所以执著，我们期望我们所有的伙伴，享受创造快乐幸福的过程。</p>
                    </el-col>
                </el-row>
            </div>
        </div>
        
        <m-footer-vue></m-footer-vue>

        <!-- <footerfixed></footerfixed> -->

        <nav-right v-if="!isMobile"></nav-right>
        
        <nav-bottom v-if="isMobile"></nav-bottom>
    </div>
</template>
<script>
    import mFooterVue from './m-footer';
    // import footerfixed from './m-footer-fixed';
    import navRight from './nav-right'
    import navBottom from './nav-bottom'

    export default {
        name: 'index',
        created() {
            let deviceAgent = navigator.userAgent.toLowerCase();
            this.isMobile = deviceAgent.match(/(iphone|ipod|ipad|android)/) ? true : false;
        },
        components: {
            mFooterVue,navRight,navBottom
        },
        data: function () {
            return {
                isMobile: false,
                activeIndex: '1',
                deviceShowIndex: 0,
                bannerList: [
                    {imgURL: require('../assets/img/index/banner/banner_1.jpg')},
                    {imgURL: require('../assets/img/index/banner/banner_2.jpg')},
                    {imgURL: require('../assets/img/index/banner/banner_3.jpg')},
                    {imgURL: require('../assets/img/index/banner/banner_4.jpg')}
                ],
                caseList: [
                    {
                        title: '会务',
                        sortList: ['年会', '经销商会', '新品发布会', '启动仪式', '答谢会', '研究会'],
                        detail: [
                            {id:1,imgURL: require('../assets/img/index/huiwu/luhu.jpg'), caseTitle: '捷豹路虎春季发布会',caseContent:'以符合捷豹路虎品牌定位的、运动、科技、探险、户外为主基调设计整个方案'},
                            {id:2,imgURL: require('../assets/img/index/huiwu/jipu.jpg'), caseTitle: 'JEEP新车发布会',caseContent:'JEEP2018年发布会以科技致爱为主题，以科技蓝为主色营造科技革新的氛围。'},
                            {id:3,imgURL: require('../assets/img/index/huiwu/dema.jpg'), caseTitle: '英雄联盟-德玛西亚杯',caseContent:'电竞标准场景搭建'},
                        ]
                    },
                    {
                        title: '庆典',
                        sortList: ['开业', '乔迁', '周年庆', '节日'],
                        detail: [
                            {id:4,imgURL: require('../assets/img/index/qingdian/meikemeijia.jpg'), caseTitle: '美克美家成都旗舰店开业典礼',caseContent:'美克美家一直以高端大气的形象出现，开业典礼以白色、灰色、黑色等为主色调突出其高贵的品牌定位。'},
                            {id:5,imgURL: require('../assets/img/index/qingdian/cya.jpg'), caseTitle: '超有爱六周年庆典',caseContent:'高端晚宴与酒会相结合的年会庆典，结合超有爱的设计风格，营造高贵、温馨的氛围。'},
                            {id:6,imgURL: require('../assets/img/index/qingdian/sanxingdui.jpg'), caseTitle: '三星堆国际飞行音乐节',caseContent:'现代科技与三星堆文明巧妙融合，包含了多种音乐风格，集合了创意集市与美食餐饮，一场现代文明与古蜀文明结合的音乐盛宴。'},
                        ]
                    },
                    {
                        title: '派对',
                        sortList: ['生日宴', '宝宝宴', '朋友聚会', '时尚轰趴'],
                        detail: [
                            {id:10,imgURL: require('../assets/img/index/party/baobao.jpg'), caseTitle: '宝宝宴—粉色梦幻主题',caseContent:'本场活动营造的是小女孩粉色梦幻的生日派对。'},
                            {id:11,imgURL: require('../assets/img/index/party/haiyang.jpg'), caseTitle: '宝宝宴—海洋主题',caseContent:'本场活动是以海洋元素为设计素材，营造出一场蓝色海洋主题生日派对'},
                        ]
                    },
                    {
                        title: '暖场活动',
                        sortList: ['楼盘暖场', '商场美陈', '企业家庭日'],
                        detail: [
                            {id:7,imgURL: require('../assets/img/index/zszl/fulicheng.jpg'), caseTitle: '富利新城揭幕仪式',caseContent:'一场传统红火风格的楼盘揭幕仪式，喜庆隆重、红红火火。'},
                            {id:12,imgURL: require('../assets/img/index/party/heijin.jpg'), caseTitle: '主题轰趴--黑金凡盒',caseContent:'黑色和金色都是高贵经典的颜色，两种颜色的搭配打造出一场高贵又冷艳的个性风格的聚会'},
                            {id:9,imgURL: require('../assets/img/index/zszl/meichen.jpg'), caseTitle: '美陈—粉色圣诞',caseContent:'本活动以粉色为主色 调，打造网红美陈，嗨爆粉色 圣诞。'},
                        ]
                    },
                ],
                deviceSortList: [
                    [
                        {imgURL: require('../assets/img/index/device/d_1.png'), title: '光束灯'},
                        {imgURL: require('../assets/img/index/device/d_2.png'), title: '影视面光灯'},
                        {imgURL: require('../assets/img/index/device/d_3.png'), title: '2500W机械追光灯'},
                        {imgURL: require('../assets/img/index/device/d_4.png'), title: '成像灯'},
                        {imgURL: require('../assets/img/index/device/d_5.png'), title: '车展灯'},
                        {imgURL: require('../assets/img/index/device/d_6.png'), title: '追光灯'},
                    ],
                    [
                        {imgURL: require('../assets/img/index/device/y_1.jpg'), title: 'JBL'},
                        {imgURL: require('../assets/img/index/device/y_2.jpg'), title: '声扬'},
                        {imgURL: require('../assets/img/index/device/y_3.jpg'), title: 'MEXO音响'},
                        {imgURL: require('../assets/img/index/device/y_4.jpg'), title: '音响'},
                        {imgURL: require('../assets/img/index/device/y_5.jpg'), title: '超低音'},
                        {imgURL: require('../assets/img/index/device/y_6.jpg'), title: '力素'},
                    ],
                    [
                        {imgURL: require('../assets/img/index/device/p_1.jpg'), title: '大功率投影机'},
                        {imgURL: require('../assets/img/index/device/p_2.jpg'), title: '大屏'},
                        {imgURL: require('../assets/img/index/device/p_3.jpg'), title: 'LED屏幕'},
                    ],
                    [
                        {imgURL: require('../assets/img/index/device/t_1.jpg'), title: '专业视频切换台'},
                        {imgURL: require('../assets/img/index/device/t_2.jpg'), title: 'MA1调光台'},
                        {imgURL: require('../assets/img/index/device/t_3.jpg'), title: '调音台'},
                        {imgURL: require('../assets/img/index/device/t_4.jpg'), title: '专业视频切换台'},
                        {imgURL: require('../assets/img/index/device/t_5.jpg'), title: 'MA调光台'},
                    ]
                ]
            }
        },
        methods: {
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