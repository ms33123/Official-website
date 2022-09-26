<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  methods:{

  },
  beforeCreate(){
    this.$store.dispatch('information');
    this.$store.dispatch('map')
  },
  mounted(){

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

body{
  background-color: #2d3a4b;
}
</style>