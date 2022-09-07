<template>
  <div>
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="600rpx">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="https://img.zcool.cn/community/01b94e5d021da8a801213ec26a5a43.jpg@1280w_1l_2o_100sh.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 主要产品 -->
    <zycp/>
    <!-- 关于我们 -->
    <gywm/>
  </div>
</template>

<script>
import zycp from '../components/zycp/zycp.vue'
import gywm from '../components/gywm/gywm.vue'
export default {
    name:'Sy',
    components:{
      zycp,
      gywm
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 600rpx;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
    width: 100%;
  }
</style>