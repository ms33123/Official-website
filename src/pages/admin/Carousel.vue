<template>
    <div>
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
                prop="address"
                label="图片地址">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>


            <!-- 添加弹窗 -->
            <el-dialog
            title="添加"
            :visible.sync="add"
            width="50%">
            <span>
                <carouselVue/>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="add = false">取 消</el-button>
                <el-button type="primary" @click="add = false">确 定</el-button>
            </span>
            </el-dialog>

            <!-- 修改弹窗 -->
            <el-dialog
            title="修改"
            :visible.sync="update"
            width="50%">
            <span>
                <carouselVue/>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="update = false">取 消</el-button>
                <el-button type="primary" @click="update = false">确 定</el-button>
            </span>
            </el-dialog>

        </div>
        </el-card>
    </div>
</template>

<script>
import carouselVue from './carouselVue.vue'
export default {
    name:'Carousel',
    components:{
        carouselVue
    },
    data() {
      return {
        add:false,
        update:false,
        tableData: [{
          name: '测试',
          address: 'http:127.0.0.1'
        }]
      }
      
    },
    methods:{
        handleClick(a){
            console.log(a);
            this.update = true
        }
    }
}
</script>

<style scoped>

</style>