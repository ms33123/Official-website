<template>
  <div class="main">
    <el-row :gutter="20">
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <img src="https://show.cmseasy.cn/f169/html/upload/images/201902/img16.jpg" alt="">
                <div class="content">
                    <span class="title">主要产品1</span>
                    <p class="introduce">介绍</p>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <img src="https://show.cmseasy.cn/f169/html/upload/images/201902/img15.jpg" alt="">
                <div class="content">
                    <span class="title">主要产品1</span>
                    <p class="introduce">介绍</p>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <img src="https://show.cmseasy.cn/f169/html/upload/images/201902/img15.jpg" alt="">
                <div class="content">
                    <span class="title">主要产品1</span>
                    <p class="introduce">介绍</p>
                </div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'zycpList'
}
</script>

<style scoped>
.main{
  margin-top: 30px;
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    position: relative;
    background: #fff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  img{
    width: 100%;
    height: 300px;
  }

  .content{
    padding: 5px;
  }
  .title{
    font-weight: 500;
    font-size: 18px;
  }
  .introduce{
    color: #999999;
  }
</style>