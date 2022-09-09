<template>
    <div class="main">
        {{title}}
    </div>
</template>

<script>
export default {   
    name:'banner',
    props:['title']
}
</script>

<style scoped>
.main{
    background-color: #233876;
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: white;
    font-weight: 400;
    font-size: 30px;
}
</style>