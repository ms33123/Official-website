<template>
  <div>
    产品展示{{id}}
  </div>
</template>

<script>
export default {
    name:'cpzs',
    data() {
      return {
        id:this.$route.params.id
      }
    },
    mounted(){
      console.log(this.id);
    },
}
</script>

<style>

</style>