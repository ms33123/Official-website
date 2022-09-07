<template>
  <div >
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <div class="usersList">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户列表</span>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="680">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
    name:'User',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
}
</script>

<style scoped>
.el-button:nth-child(1){
  float: left;
}
.el-button:nth-child(1){
  float: right;
}
.el-input{
  float: right;
  width: 200px;
  margin-right: 10px;
}

.usersList{
  margin-top: 10px;
}
</style>