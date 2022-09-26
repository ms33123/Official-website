<template>
  <div>
    <banner :title='title'/>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider>
          <div class="content">
            <div class="img">
              <img src="@/assets/images/lxwm.jpg" alt="">
            </div>
            <div class="contentBox">
              <p>{{$store.state.information.name}}</p>
              <p>地址：{{$store.state.information.address}}</p>
              <p>电话：{{$store.state.information.phone}}</p>
              <p>Q  Q：{{$store.state.information.qq}}</p>
              <p>邮编：{{$store.state.information.Zip}}</p>
              <p>邮箱：{{$store.state.information.email}}</p>
              <p>网址：{{$store.state.information.website}}</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import banner from '../../components/cpzs/banner.vue'
export default {
    name:'lxwm',
    data() {
      return {
        title:'联系我们'
      }
    },
    components:{
      banner
    }
}
</script>

<style scoped>
.el-row {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 150px;
    margin-right: 150px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  /* 面包屑 */
  .el-breadcrumb{
    padding-top: 10px;
    margin-left: 20px;
  }

  .content{
    position: relative;
    width: 100%;
    height: 500px;
  }
  .img{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
  }
  .contentBox{
    position: absolute;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .contentBox > p{
    margin-top: 10px;
    color: #222222;
    font-size: 17px;
  }
</style>