<template>
<el-row class="tac">
   <el-col :span="12">
    <h2>后台管理系统</h2>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
      background-color="#545c64"
      router>
      <el-menu-item index="/home">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="/home/shop" >
        <i class="el-icon-shopping-bag-1"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>

      <el-menu-item index="/home/user">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>其他</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">
            <i class="el-icon-setting"></i>
            <span>其他</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
export default {
    name:'Aside',
    data() {
      return {
        
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.el-col{
    width: 200px;
}
.el-menu{
    width: 200px;
}
h2{
    line-height: 60px;
    height: 60px;
    text-align: center;
}
</style>