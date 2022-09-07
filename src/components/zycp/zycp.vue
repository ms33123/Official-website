<template>
  <div>
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <div>
                    <div class="titleList">
                        <span class="title">主要产品</span>
                        <span class="smallTitle">Main products</span>
                    </div>
                </div>
                <zycpList/>
            </div>
        </el-col>
    </el-row>

  </div>
</template>

<script>
import zycpList from '../zycp/zycpList.vue'
export default {
    name:'zycp',
    components:{
        zycpList
    }
}
</script>

<style scoped>
  .el-row {
    margin: 50px 100px 100px 100px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    padding: 50px 50px 20px 50px;
    background: white;
    border-radius: 4px;
  }
  .titleList{
    position: relative;
    height: 30px;
    margin-bottom: 10px;
  }
  .title{
    color:#233888;
    font-size: 20px;
    font-weight: bolder;
  }
  .smallTitle{
    position: relative;;
    bottom: 0;
    left: 2px;
    color: #9999b3;
    font-size: 14px;
  }
  .titleList::after{
    position: absolute;
    left: 0;
    bottom: -1px;
    content: '';
    width: 40px;
    border-bottom: 3px solid #233888;
  }
</style>