<template>
    <div :key="key">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>首页轮播</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="add = true">添加</el-button>
        </div>
        <div>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="name"
                label="轮播图名称"
                width="220">
                </el-table-column>
                <el-table-column
                prop="imgurl"
                label="图片地址">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small" @click="Remove(scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>


            <!-- 添加弹窗 -->
            <el-dialog
            title="添加"
            :visible.sync="add"
            width="50%">
            <span>
                <carouselVue ref="carouselData"/>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="add = false">取 消</el-button>
                <el-button type="primary" @click="Yes()">确 定</el-button>
            </span>
            </el-dialog>



            <!-- 修改弹窗 -->
            <el-dialog
            title="修改"
            :visible.sync="update"
            width="50%">
            <span>
                <carouselVue :index="index" ref="UpdatacarouselData"/>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="update = false">取 消</el-button>
                <el-button type="primary" @click="updateData()">确 定</el-button>
            </span>
            </el-dialog>

        </div>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs'
import { Message } from 'element-ui';
import { MessageBox } from 'element-ui';
import carouselVue from './carouselVue.vue'
export default {
    name:'Carousel',
    components:{
        carouselVue
    },
    data() {
      return {
        key:0,
        add:false,
        update:false,
        index:'',
        tableData: []
      }
    },
    methods:{
        //编辑修改
        handleClick(value){
            this.update = true
            this.index = value.id
        },
        updateData(){
            let data = this.$refs['UpdatacarouselData'].formLabelAlign
            axios.post('/admin/updatecarousel',qs.stringify(data)).then((res)=>{
                if(res.data.status!=0){
                    Message({
                        message:'修改成功',
                        type:'success'
                    })
                    this.getData()
                    this.update = false
                }
            })
        },

        //添加
        Yes(){
            let data = this.$refs['carouselData'].formLabelAlign
            axios.post('/admin/addcarousel',qs.stringify(data)).then((res)=>{
                if(res.data.status != 0){
                    Message({
                        message: '添加成功',
                        type: 'success'
                    })
                    this.getData()
                    this.add = false 
                }else{
                    Message({
                        message: res.data.msg,
                        type: 'warning'
                    })
                }
            })
        },

        //删除
        Remove(value){
            MessageBox.alert('此操作将删除该图片, 是否继续?','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //删除成功
                axios.post('/admin/detelecarousel/'+value.id).then((res)=>{
                    if(res.data.status != 0){
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                        });
                        this.getData()
                    }
                })}).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
        },
        //获取列表方法
        getData(){
            axios.get('/api/getcarousel').then((res)=>{
            if(res.data.status != 0){
                this.tableData = res.data.data
            }else{
                Message({
                    message: '获取列表失败',
                    type: 'error'
                })
            }
        })
        }
    },
    //获取轮播列表
    created(){
        axios.get('/api/getcarousel').then((res)=>{
            if(res.data.status != 0){
                this.tableData = res.data.data
            }else{
                Message({
                    message: '获取列表失败',
                    type: 'error'
                })
            }
        })
    }
}
</script>

<style scoped>

</style>