<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>产品列表</span>
        <el-button type="primary" size="mini" id="add" @click="add = true">添加</el-button>
    </div>
    <div>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="name"
            label="产品名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="time"
            label="修改时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="content"
            label="内容">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="update = true">编辑</el-button>
        </template>
        </el-table-column>
        </el-table>

        <!-- 编辑弹窗 -->
        <el-dialog
        title="编辑"
        :visible.sync="update"
        width="50%"
        :before-close="handleClose">
        <span>
            <revise/>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="update = false">取 消</el-button>
            <el-button type="primary" @click="update = false">确 定</el-button>
        </span>
        </el-dialog>

        <!-- 添加弹窗 -->
        <el-dialog
        title="添加"
        :visible.sync="add"
        width="50%"
        :before-close="handleClose">
        <span>
            <revise/>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="add = false">取 消</el-button>
            <el-button type="primary" @click="add = false">确 定</el-button>
        </span>
        </el-dialog>

    </div>
    </el-card>
  </div>
</template>

<script>
import revise from '../admin/revise.vue'
export default {
    name:'ProductList',
    components:{
        revise
    },
    data() {
        return {
          update: false,
          add:false,
          tableData: [{
            time: '2016-05-02',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1518 弄'
          }, {
            time: '2016-05-04',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1517 弄'
          }, {
            time: '2016-05-01',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1519 弄'
          }, {
            time: '2016-05-03',
            name: '王小虎',
            content: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
    methods: {
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>

<style scoped>
#add{
  float: right;
}
</style>