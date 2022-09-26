<template>
  <div class="main">
     <el-row :gutter="20">
        <el-col :span="24">
            <div class="grid-content bg-purple">
                <div class="content">
                    <span class="lxwm">联系方式</span>
                    <p class="smallTitle">CONTACT US</p>
                    <p class="webName">{{$store.state.information.name}}</p>
                    <div class="web">
                        <p class="address">地址:{{$store.state.information.address}}</p>
                        <p class="zipCode">邮政编码:{{$store.state.information.Zip}}</p>
                        <p class="phone">电话:{{$store.state.information.phone}}</p>
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
            label: { content: '', offset: [-20, -30] }
        }
    },
    computed:{
      center(){
        const jwd = window.localStorage.getItem('map');
        return JSON.parse(jwd).jwd
      },
      
    },
    methods:{
        fn(){
            window.location.href = 'http://m.amap.com/navi/?dest='+this.$store.state.map.jwd+'&destName='+this.$store.state.map.name+'&hideRouteIcon=&key='+this.$store.state.map.key
        }
    },
    created(){
      
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