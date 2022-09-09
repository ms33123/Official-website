<template>
  <div class="main">
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active='activeIndex'
        unique-opened>
        <img class="el-icon-edit" src="https://ts1.cn.mm.bing.net/th/id/R-C.53d3c079f47aca3e4048c389a4a03214?rik=4jp%2bGhuchFNHLg&riu=http%3a%2f%2fwww.logomister.cn%2fupfiles%2fimage%2fimage%2f20201125%2f20201125173620_75201.jpg&ehk=SgrdibrjaGD1Y%2bAHeVUx3lsAVGs6MY2hIsH9AC0d4wU%3d&risl=&pid=ImgRaw&r=0" alt="">
        <el-menu-item class="index" index="1" route="/">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">产品展示</template>
            <el-menu-item index="2-1" route="/cpzs">选项1</el-menu-item>
            <el-menu-item index="2-2" route="/cpzs">选项2</el-menu-item>
            <el-menu-item index="2-3" route="/cpzs">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" route="/gywm">关于我们</el-menu-item>
        <el-menu-item index="4" route="/lxwm">联系我们</el-menu-item>
    </el-menu>
    <router-view :key=key></router-view>
    <foot/>
  </div>
</template>

<script>
import foot from '../components/foot.vue'
export default {
    name:'Index',
    components:{
        foot
    },
    data() {
        return {
            activeIndex: '1'
        }
    },
    computed:{
        key(){
            return this.$route.path + Math.random();
        }
    },
    methods: {
      handleSelect(key, keyPath,event) {
        if(event.route == '/cpzs'){
            // this.$router.push({name:'cpzs',params:{id:keyPath[1]}})
            this.$router.push({path:event.route + `/${keyPath[1]}`})
        }else{
            this.$router.push({path:event.route})
        }
        // this.$router.push({path:event.route,query:{id:keyPath[1]}})
        this.activeIndex = key
      }
    },
    // 修改单组件页面背景颜色
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-Color:#f8f8f8')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    }
}
</script>

<style scoped>
.el-icon-edit{
    float: left;
    margin-left: 20px;
    height: 60px;
}
.index{
    margin-left: 30%;
}
</style>