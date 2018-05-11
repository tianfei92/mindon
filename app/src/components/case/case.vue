<template>
  <div>
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
              <el-submenu index="6">
                <template slot="title">曼.成员</template>
                <el-menu-item index="6-1">六十度餐饮</el-menu-item>
                <el-menu-item index="6-2">墨饰居</el-menu-item>
              </el-submenu>
            </el-menu>
            <span>180-0809-1258</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "case",
  data() {
    return {};
  }
};
</script>
<style lang="less">
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
    .logo-nav {
        width: 1190px;
        margin: auto;
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
            background: url("../../assets/img/index/logo.png") center no-repeat;
            background-size: 70%;
        }
        .logo-des {
            display: inline-block;
            vertical-align: top;
            width: 145px;
            height: 60px;
            background: url('../../assets/img/index/mindon-logo-des.png') center 20px no-repeat;
            background-size: contain;
        }
    }
    .nav {
        float: right;
    }
}
</style>

