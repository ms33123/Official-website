<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="产品名称">
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="发布时间">
          <div class="block">
            <el-date-picker
            v-model="formLabelAlign.time"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </div>
    </el-form-item>
    <el-form-item label="内容">
        <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="formLabelAlign.content">
        </el-input>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'revise',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          time: '',
          content: ''
        }
      }
    }
}
</script>

<style scoped>

</style>