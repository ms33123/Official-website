<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>关于我们</span>
    </div>
    <el-divider content-position="left">关于我们简介内容</el-divider>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="简介">
        <el-input
          type="textarea"
          v-model="formLabelAlign.content"
          :autosize="{ minRows: 6}"
          placeholder="请输入内容">
        </el-input>
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
    name:'about',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign:{
          content:''
        }
      }
    },
}
</script>

<style scoped>

</style>