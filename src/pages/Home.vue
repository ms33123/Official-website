<template>
  <div>
    <el-row :gutter="5">
      <el-col :span="8">
        <el-card class="box-card">
          <div>
            <el-avatar :size="150" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <span class="userName">Admin</span>
          <span class="jurisdiction">超级管理员</span>
          <el-divider></el-divider>
          <p class="pstyle">上次登录时间:<span>2022-7-19</span></p>
          <p class="pstyle">上次登录地点:<span>安徽</span></p>
        </el-card>
      </el-col>
      
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div class="l-box">
            <img src="../assets/images/shop.png" style="width:95px" alt="">
          </div>
          <div class="r-box">
            <p>当前商品数量</p>
            <p>123456</p>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div class="l-box">
            <img src="../assets/images/xiaoliang.png" style="width:95px" alt="">
          </div>
          <div class="r-box">
            <p>当前销售数量</p>
            <p>123456</p>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div class="l-box">
            <img src="../assets/images/shop.png" style="width:95px" alt="">
          </div>
          <div class="r-box">
            <p>当前商品数量</p>
            <p>123456</p>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div class="l-box">
            <img src="../assets/images/xiaoliang.png" style="width:95px" alt="">
          </div>
          <div class="r-box">
            <p>当前销售数量</p>
            <p>123456</p>
          </div>
        </el-card>
      </el-col>
  </el-row>

  <el-row :gutter="5">
      <el-col :span="8">
        <el-card class="box-card">
          <el-table
      :data="SaleData"
      style="width: 100%">
      <el-table-column
        prop="CommodityName"
        label="商品名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="TotalSales"
        label="总销量"
        width="120">
      </el-table-column>
      <el-table-column
        prop="SalesWeek"
        label="本周销量">
      </el-table-column>
    </el-table>
        </el-card>

      </el-col>
      
      <el-col :span="16">
        <el-card>
          <Echars/>
        </el-card>
      </el-col>
  </el-row>
  </div>
</template>

<script>
import Echars from '../components/Echars.vue'
export default {
  name:'Home',
  data() {
    return {
      SaleData:[{
        CommodityName:'oppo',
        TotalSales:10000,
        SalesWeek:2000
      },{
        CommodityName:'oppo',
        TotalSales:10000,
        SalesWeek:2000
      },{
        CommodityName:'oppo',
        TotalSales:10000,
        SalesWeek:2000
      },{
        CommodityName:'oppo',
        TotalSales:10000,
        SalesWeek:2000
      },{
        CommodityName:'oppo',
        TotalSales:10000,
        SalesWeek:2000
      }]
    }
  },
  components:{
    Echars
  },
  mounted(){
    // console.log(this);
  }
}
</script>

<style scoped>
html,body{
  background-color: #d3dce6;
}

/* 个人卡片 */
.box-card{
  position: relative;
}
.userName{
  font-size: 30px;
  position:absolute;
  top: 25%;
  left: 55%;
}
.jurisdiction{
  color: #ccc;
  position: absolute;
  left: 56%;
  top: 40%;
}
.pstyle{
  color: #ccc;
  font-size: 12px;
  margin: 3px;
}
.pstyle span{
  color: #252526;
  margin-left: 20px;
}

/* 商品卡片 */
.r-box{
  position: absolute;
  left: 150px;
  top: 20%;
}
.r-box p:nth-child(1){
  color: rgb(106, 103, 103);
  font-size: 30px;
  font-weight: bolder;
}
.r-box p:nth-child(2){
  font-size: 30px;
  font-weight: bolder;
  margin-left: 30px;
}

</style>