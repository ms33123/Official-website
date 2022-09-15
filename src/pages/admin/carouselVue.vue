<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-upload
    :on-success="success"
    class="upload-demo"
    action="https://www.imgtp.com/api/upload"
    name="image"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="1"
    :on-exceed="handleExceed">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-form-item label="图片地址">
        <el-input v-model="formLabelAlign.url" placeholder="上传文件图片自动填写"></el-input>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name:'carouselVue',
    data() {
      return {
        fileList:[],
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          url:''
        }
      };
    },
    methods:{
        success(res){
            this.formLabelAlign.url = res.data.url
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>

<style scoped>
.upload-demo{
    margin-left: 80px;
}
</style>