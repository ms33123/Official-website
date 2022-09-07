<template>
  <div class="main">
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple">
                <div class="TitleVC">
                    <span class="title">关于我们</span>
                    <p class="smallTitle">ABOUT US</p>
                </div>
                <div class="content">
                    <img src="https://show.cmseasy.cn/f169/html/upload/images/201902/img21.jpg" alt="">
                    <p>新能源产业是开发新能源的单位和企业所从事的工作的一系列过程。新能源产业主要是源于新能源的发现和应用。新能源指刚开始开发利用或正在积极研究、有待推广的能源，如太阳能、地热能、风能、海洋能、生物质能和核聚变能等。1、新能源按其形成和来源分类：(1)、来自太阳辐射的能量，如：太阳能、水能、风能、生物能等。(2)、来自地</p>
                </div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'gywm'
}
</script>

<style scoped>
.main{
    background-color: #f1f1f1;
    width: 100%;
    height: 500px;
}
  .el-row {
    margin: 150px;
  }
  .bg-purple {
    position: relative;
    background: #f1f1f1;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 500px;
  }

  .title{
    position: absolute;
    color: #233888;
    font-size: 25px;
    font-weight: bold;
    top: 18%;
  }
  .smallTitle{
    position: absolute;
    color: #af9999;
    top: 26%;
  }

  .content{
    position: relative;
    top: 40%;
  }
  .content > p{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30%;
    font-size: 18px;
    color: #666666;
  }
  img{
    width: 300px;
    height: 200px;
  }
</style>