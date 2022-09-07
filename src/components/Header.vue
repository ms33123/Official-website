<template>
  <div class="box">
    <div class="l-header">
        <el-button plain size="mini" icon="el-icon-menu"></el-button>
        <span>首页</span>
    </div>
    <div class="r-header">
        <el-dropdown trigger="click">
            <span>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown" trigger="click">
                <el-dropdown-item>退出</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
    .box{
        line-height: 60px;
    }
    .l-header{
        float: left;
        font-size: 12px;
        color: white;
    }
    .l-header span{
        margin-left: 10px;
    }

    .r-header{
        position: relative;
        float: right;
        top: 10px;
        
    }
</style>