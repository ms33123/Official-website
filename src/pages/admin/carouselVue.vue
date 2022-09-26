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
        <el-input v-model="formLabelAlign.imgurl" placeholder="上传文件图片自动填写" disabled></el-input>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
import { Message } from 'element-ui';
export default {
    name:'carouselVue',
    props:['index'],
    data() {
      return {
        fileList:[],
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          imgurl:''
        }
      };
    },
    methods:{
        success(res){
            this.formLabelAlign.imgurl = res.data.url
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
    },
    close(){
      this.$destroy()
    },
    computed:{
      Index:function(){
        if(this.index==''){
          return
        }else{
          return this.index
        }
      }
    },
    watch: {
      Index:{
        handler(newValue,oldValue){
          if(this.index){
            axios.post('/admin/getcarousel/'+newValue).then((res)=>{
              if(res.data.status!=0){
                this.formLabelAlign = res.data.data[0]
              }else{
                Message({
                  message:'获取失败',
                  type:'error'
                })
              }
            })
          }
        },
        immediate:true
      }
    },
    mounted(){
      
    }
}
</script>

<style scoped>
.upload-demo{
    margin-left: 80px;
}
</style>