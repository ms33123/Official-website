<template>
  <div class="Main">
    <h2>后台管理系统</h2>

    <!-- 登录页面 -->
    <div class="Sign" v-show="isSign">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="submitForm(ruleForm)">登录</el-button>
            <el-button type="primary" @click="isSign = !isSign">注册</el-button>
            </el-form-item>
        </el-form>
    </div>

    <!-- 注册页面 -->

    <div class="register" v-show="!isSign">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="RegisterNow(ruleForm)">立即注册</el-button>
            <el-button type="primary" @click="isSign = !isSign" >去登录</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { nanoid } from 'nanoid'
export default {
data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        }
      }

      return {
        isSign:true,
        ruleForm: {
          username: '',
          password:'',
          checkPass:''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true,validator: validatePass, trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
      // 登录
        submitForm(ruleForm){
            let SignData ={
              deviceId:165156,
              deviceName:1564,
              pwd:ruleForm.password,
              username:ruleForm.username
            }
            if(ruleForm.username == ''){
                alert('用户名或密码不能为空');
            }else{
                axios.post(this.api+'/ms3312/user/username/login',qs.stringify(SignData)).then((res,err)=>{
                  if(!err){
                    if(res.data.code == 0){
                      let id = nanoid()
                      window.sessionStorage.setItem('token',res.data.data.token)
                      window.sessionStorage.setItem('nanoid',id)
                      window.localStorage.setItem('nanoid',id)
                      // 将token存在vuex里
                      this.$store.state.token = res.data.data.token
                      this.$router.push({path:"/home"})
                    }else{
                      alert(res.data.msg)
                    }
                  }
                })
            }
        },
        // 注册
        RegisterNow(ruleForm){
          if(ruleForm.checkPass != ruleForm.password){
            alert('两次密码不一样')
          }else{{
            let RegistrationData = {
              username:ruleForm.username,
              pwd:ruleForm.password
            }
            axios.post(this.api+'/ms3312/user/username/register',qs.stringify(RegistrationData)).then((res,err)=>{
              if(!err){
                if(res.data.code == 10000){
                  alert('用户已存在')
                }else if(res.data.code == 0){
                  alert('注册成功')
                }else{
                  alert(res.data.msg)
                }
              }
            })
          }}
        }
    }
}
</script>

<style scoped>
.Main{
    position: absolute;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.Main h2{
    text-align: center;
    color: white;
    margin-bottom: 20px;
}

.el-button{
  width: 130px;
}
</style>