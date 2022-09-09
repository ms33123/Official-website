<template>
  <div>
    <banner :title='title'/>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>产品展示</el-breadcrumb-item>
            <el-breadcrumb-item>{{BigTitle}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider>
          <div class="title">产品展示</div>
          <div class="content">
                    多年来，始终秉承开拓创新的精神，坚持创造先进完善的建站体系，不仅研发了一系列适用于各行各业的智能建站软件，并已成功推广至上千家企业，产品市场前景广阔。本公司以其敏锐的市场洞察力、高品质的产品以及周到热情的服务使公司获得了客户的一致好评。

        我们是一个 高素质的技术团队 ，凝聚了一批行业类年经、有活力的成员。

        他们在各自的阵地上有着出色的表现以及丰富的实战经验，更具魅力的是他们的创造力和奉献精神。

        我们愿意不仅要让客户满意，更要让客户感动，于客户一同成长！

        我们自信完成好客户的项目，我们运用良好的知名度和信誉度+丰富的网站建设经验+一流的咨询和网站开发团队+竞争力的价格+完整的网站产品解决方案，来满足客户于互联网时代的品牌推广需求，携助客户开拓市场，为企业的品牌建设、产品网络推广提供了最好的帮助与支持。

         经营理念 ：精益求精  诚信为先 客户至上 优质服务！  

         发展目标 ：打造中国网站建设第一品牌
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import banner from '../../components/cpzs/banner.vue'
export default {
    name:'cpzs',
    data() {
      return {
        id:this.$route.params.id,
        title:'产品展示'
      }
    },
    computed:{
      BigTitle(){
        if(this.id == '2-1'){
          return '选项1'
        }else if(this.id == '2-2'){
          return '选项2'
        }else if(this.id == '2-3'){
          return '选项3'
        }
      }
    },
    components:{
      banner
    },
    mounted(){
      console.log(this.$route);
    },
}
</script>

<style scoped>
.el-row {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 150px;
    margin-right: 150px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  /* 面包屑 */
  .el-breadcrumb{
    padding-top: 10px;
    margin-left: 20px;
  }

  .title{
    width: 100%;
    color: black;
    font-weight: 800;
    font-size: 22px;
    text-align: center;
  }

  .content{
    margin: 20px;
  }
</style>