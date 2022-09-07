<template>
  <div ref='mychart' style='height:300px;'></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name:'Echars',
    mounted(){
    this.drawLine()
    },
    methods:{
    drawLine(){
      // 初始化实例
      echarts.init(this.$refs.mychart).setOption({
        // 设置背景为白色
        backgroundColor: 'white',
        // 定义类别
        legend: {
          data: ["销售额","成本"]
        },
        // 定义提示类型
        tooltip: {
          trigger: 'axis',  // axis显示每一列的所有类别数据, item只显示单个类别
        },
        // 定义横坐标标签
        xAxis: {
          name: '服装',
          data: ['衬衫', '羊毛衫', '裤子', '鞋子', '羽绒服'],
          axisLabel: {
            show: true,
            textStyle: {
              color: 'black',  //更改X坐标轴文字颜色
              fontSize : 16      //更改坐标轴文字大小
            }
          }
        },
        // 定义纵坐标尺度，一般会自己变化
        yAxis: {
          name: '元',
          axisLabel: {
            show: true,
            textStyle: {
              color: 'black',  //更改Y坐标轴文字颜色
              fontSize : 16      //更改坐标轴文字大小
            }
          }
        },
        // 定义每个标签对应类别的数值
        series: [
          {
          name: '销售额',
          type: 'bar', // bar为条状图
          color: ['#00ff00'], // 设置背景颜色
          data: [15, 20, 36, 73, 62,]
          },
          {
            name: '成本',
            type: 'line', // line为折线图
            color: ['#ff0000'],
            data: [13, 15, 30, 50, 48]
          },
        ]
      }, true)
    }
  }
}
</script>

<style>

</style>