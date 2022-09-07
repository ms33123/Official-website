<template>
  <el-container>
  <el-aside width="201px">
    <Aside/>
  </el-aside>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view id="secondRoute"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Aside from './Aside.vue'
import Header from './Header.vue'
export default {
    name:'Index',
    components:{
        Aside,
        Header
    },
}
</script>

<style scoped>
.el-main{
  background-color: white;
}
.el-header{
  background-color: black;
}

.el-aside{
  background-color:#545c64;
  height:100vh;
}

#secondRoute:hover {
        overflow-y: overlay;
    }
#secondRoute {
        height: 85vh;
        overflow-y: hidden;
        overflow-x: hidden;
    }

</style>