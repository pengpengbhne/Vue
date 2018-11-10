<template>
    <div class="app-foot">
        <p>版权所有@天津XXXX公司，作者：天马行空</p>
    </div>
</template>
<script>
export default {
    name:"footer",
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.app-foot{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;

}
.app-foot p{
    display: inline-block;
}
</style>