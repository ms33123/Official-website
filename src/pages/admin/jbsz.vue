<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>基本设置</span>
            </div>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="网站名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="网站SEO">
                    <el-input v-model="formLabelAlign.seo"></el-input>
                </el-form-item>
                <el-form-item label="联系方式">
                    <el-input v-model="formLabelAlign.phone"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                <el-input v-model="formLabelAlign.address"></el-input>
                </el-form-item>
                <el-form-item label="邮编">
                <el-input v-model="formLabelAlign.Zip"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                <el-input v-model="formLabelAlign.email"></el-input>
                </el-form-item>
                <el-form-item label="网址">
                <el-input v-model="formLabelAlign.webaddress"></el-input>
                </el-form-item>
                <el-form-item label="QQ">
                <el-input v-model="formLabelAlign.QQ"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="medium" type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name:'jbsz',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          seo: '',
          phone:'',
          address:'',
          Zip:'',
          email:'',
          webaddress:'',
          QQ:''
        }
      }
    },
    methods:{
        onSubmit(){
            console.log(this.labelPosition);
        }
    }
}
</script>

<style scoped>

</style>