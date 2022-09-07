<template>
  <div class="main">
     <el-row :gutter="20">
        <el-col :span="24">
            <div class="grid-content bg-purple">
                <div class="content">
                    <span class="lxwm">联系方式</span>
                    <p class="smallTitle">CONTACT US</p>
                    <p class="webName">网站名称</p>
                    <div class="web">
                        <p class="address">地址</p>
                        <p class="zipCode">邮政编码</p>
                        <p class="phone">电话</p>
                    </div>
                </div>
                <div id="container">
                    <div class="amap-wrapper" @click="fn()">
                        <el-amap class="amap-box" :vid="'amap-vue'" :center="center" >
                            <el-amap-marker
                                :position="center"
                                :label="label"
                            />
                        </el-amap>
                    <span class="ditu">点击地图可进行导航</span>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'foot',
    data() {
        return {
            center:[115.309519,33.067282],
            label: { content: '众鑫管汇', offset: [-20, -30] }
        }
    },
    methods:{
        fn(){
            window.location.href = "http://m.amap.com/navi/?dest=115.309519,33.067282&destName=众鑫管汇&hideRouteIcon=&key=8b96a2355749277530401ac50276e5bb"
        }
    }
}

</script>

<style scoped>
.main{
    height: 400px;
    background-color: #233876;
    padding-left: 150px;
    padding-top: 50px;
    padding-right: 150px;
}
  .bg-purple {
   position: relative;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .lxwm{
    color: white;
    font-weight: bold;
    font-size: 25px;
  }
  .smallTitle{
    color: white;
    font-size: 14px;
  }

  .webName{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    color: #adc0cf;
  }
  .web > p{
    margin-top: 10px;
    color: #adc0cf;
  }

  #container{
    position: absolute;
    right: 10%;
    top: 0;
    width: 500px;
    height: 350px;
    text-align: center;
  }
  .amap-wrapper {
  width: 500px;
  height: 300px;
}
.ditu{
    position: relative;
    top: 10px;
    font-size: 18px;
    color: white;
}
</style>