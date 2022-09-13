<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>地图设置</span>
    </div>
    <el-divider content-position="left">地图使用的为高德地图</el-divider>
    <el-link type="primary" target="_blank" href="https://lbs.amap.com/api/lightmap/gettingstarted/">获取高德Key</el-link>
    <el-link type="primary" target="_blank" href="https://lbs.amap.com/tools/picker/">经纬度拾取</el-link>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="Key">
        <el-input v-model="formLabelAlign.Key"></el-input>
    </el-form-item>
    <el-form-item label="位置名称">
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="经纬度">
        <el-input v-model="formLabelAlign.dest"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
    </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    name:'map',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          Key: '',
          name: '',
          dest: ''
        }
      }
    }
}
</script>

<style scoped>
.el-link{
    margin-left: 30px;
    margin-bottom: 10px;
}
</style>