<template>
  <div id="m-case-detail">
    <!-- header of other pages-->
    <div class="header">
      <div class="logo-nav">
        <div class="logo">
          <router-link to="/" class="logo-img"></router-link>
          <router-link to="/" class="logo-des"></router-link>
          <!-- <a href="" class="logo-img"></a>
          <a href="" class="logo-des"></a> -->
        </div>
          <span class="tel">180-0809-1258</span>        
          <div class="nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
              <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="/case/detail">经典案例</router-link></el-menu-item>
              <el-submenu index="6">
                <template slot="title">曼.成员</template>
                <el-menu-item index="6-1">六十度餐饮</el-menu-item>
                <el-menu-item index="6-2">墨饰居</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
      </div>
    </div>
    
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item :to="{ path: '/' }">案例</el-breadcrumb-item> -->
        <el-breadcrumb-item>案例详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="content">
      <div class="content-left">
        <img :src="imgURL" alt="" v-for="imgURL in caseImgList" :key="imgURL">
      </div>
      <div class="content-right">
        <h2>{{caseDetailInfo.title}}</h2>
        <h3>策划灵感</h3>
        <p>{{caseDetailInfo.inspiration}}</p>
        <h3>基本信息</h3>
        <ul>
          <li>嘉宾<span>{{caseDetailInfo.peopleNumbers}}人</span></li>
          <li>场地<span>{{caseDetailInfo.address}}</span></li>
          <li>时间<span>{{caseDetailInfo.theme}}</span></li>
        </ul>
      </div>
    </div>

    <!-- 相关案例 -->
    <div class="correlatioo">
      <h3>相关案例推荐</h3>
      <a class="case-demo" :class="{first: index===0}" href="/case/detail" v-for="(caseDetail, index) in 3" :key="index">
        <div class="m-case-pic"><img src="../../assets/img/index/huiwu/dema.jpg" alt=""></div>
        <div class="m-case-avart" :style="{background: 'url(' + '../../assets/img/index/huiwu/dema.jpg' + ') center no-repeat'}"></div>
        <h6>德玛西亚</h6>
        <p>这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述</p>
      </a>
    </div>

    <m-footer></m-footer>

    <nav-right></nav-right>

  </div>
</template>
<script>
import mFooter from "../m-footer";
import navRight from "../nav-right";
import axios from "@/plugins/axios";
export default {
  name: "case",
  components: {
    mFooter,
    navRight
  },
  data() {
    return {
      activeIndex: "2",
      caseImgList: [],
      caseDetailInfo: {}
    };
  },
  created() {
    let caseId = this.$route.query.id;
    this.getDetail(caseId);
  },
  methods: {
    getDetail(caseId) {
      axios.post("/api/case", {
        caseId: caseId
      }).then(res => {
        if (res.success) {
          this.caseImgList = res.data.caseImgList;
          this.caseDetailInfo = res.data.caseDetailInfo
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
#m-case-detail {
  padding-top: 60px;
}
// 头部
.header {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: solid 1px #444;
  background-color: #333;
  z-index: 999;
  font-size: 0;
  color: #333;
  .el-menu--horizontal {
    border-bottom: none;
  }
  .logo-nav {
    width: 1000px;
    margin: auto;
  }

  .logo {
    font-size: 20px;
    display: inline-block;
    vertical-align: top;
    .logo-img {
      display: inline-block;
      vertical-align: top;
      margin-top: 5px;
      width: 50px;
      height: 50px;
      background: url("../../assets/img/index/logo.png") center no-repeat;
      background-size: 70%;
    }
    .logo-des {
      display: inline-block;
      vertical-align: top;
      width: 145px;
      height: 60px;
      background: url("../../assets/img/index/mindon-logo-des.png") center 20px
        no-repeat;
      background-size: contain;
    }
  }
  .nav {
    float: right;
    a {
      display: block;
      text-decoration: none;
    }
  }
  .tel {
    margin-left: 20px;
    float: right;
    width: 145px;
    height: 60px;
    line-height: 65px;
    font-size: 16px;
    color: #ffffff;
    &::before {
      content: "";
      display: inline-block;
      vertical-align: sub;
      margin-right: 5px;
      width: 20px;
      height: 20px;
      background: url("../../assets/img/index/phone.png") center no-repeat;
      background-size: contain;
    }
  }
}

// 面包屑
.breadcrumb {
  width: 1000px;
  margin: 30px auto;
}

.content {
  position: relative;
  width: 1000px;
  margin: auto;
  overflow: hidden;
  zoom: 1;
  .content-left {
    float: left;
    width: 660px;
    margin-right: 30px;
    min-height: 500px;
    img {
      width: 100%;
      margin-bottom: 5px;
      min-height: 300px;
      background-color: #f5f9fd;
    }
  }
  .content-right {
    position: static;
    z-index: 999;
    width: 300px;
    float: right;
    h2 {
      margin-top: 0;
    }
    h3 {
      color: #4a4a4a;
      font-weight: normal;
    }
    p {
      color: #999999;
      font-size: 14px;
    }
    ul {
      width: 100%;
      margin: 0 auto 20px;
      padding: 0;
      font-size: 14px;
      li {
        list-style: none;
        width: 100%;
        margin-bottom: 8px;
        zoom: 1;
        color: #999999;
        span {
          margin-left: 20px;
          color: #4a4a4a;
        }
      }
    }
  }
}
.correlatioo {
  width: 1000px;
  margin: auto;
  overflow: hidden;
  zoom: 1;
  h3 {
    color: #3a3a3a;
    font-size: 30px;
    font-weight: normal;
    color: #3a3a3a;
    letter-spacing: 0px;
    background-image: url("http://sa.easywed.cn/dist/images/officialWebsite-v2.0/hotel-detail/line.png");
    background-position: left 50px;
    background-repeat: repeat-x;
    padding-top: 120px;
  }
  .case-demo {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 320px;
    height: 340px;
    float: left;
    margin: 0 13px 30px 0;
    padding: 7px;
    background-color: #fff;
    border-radius: 3px;
    border: solid 1px #eeeeee;
    text-decoration: none !important;
    &:hover {
      transform: translate3d(0, -2px, 0);
      transition: all 0.5s;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      img {
        transition: all 1s;
        transform: scale(1.1);
      }
    }
    .m-case-pic {
      height: 200px;
      overflow: hidden;
      img {
        max-width: 100%;
      }
    }
    .m-case-avart {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-size: cover !important;
      margin: -20px 0 0 20px;
      z-index: 1;
      border: solid 3px #fff;
    }
    h6 {
      line-height: 36px;
      font-size: 16px;
      margin: auto;
      color: #333;
      font-weight: 500;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }
    p {
      line-height: 20px;
      color: #666666;
      font-size: 14px;
    }
  }
}
</style>

