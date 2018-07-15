<template>
    <ul class="poetry">
        <li v-for="(poetry,index) in poetryData" :key="poetry.id">
        <input type="checkbox" :checked="finished" @click="changeState(index)">
            <span :class="{'finish':finished}">{{ poetry }}</span>
            <button type="button" @click="deletPoetry(index);">&times;</button>
        </li>
        <p>剩余{{itemLeft}}件待办事项</p>
    </ul>
</template>
<script>
    //子组件
    export default {
        name: "Poetry",
        props: ['poetryData'],
        finished:false,
        methods:{
            deletPoetry(index){
                this.poetryData.splice(index,1);
                this.$Message.success('删除成功');
                this.finished=false
            },
             changeState(index){
                this.poetryData[index].finished = !this.poetryData[index].finished;
            }
        },
        computed:{
            itemLeft(){
                return this.poetryData.length
            }
        }
    };

</script>
<style>
.finish{
    text-decoration:line-through;
}
</style>

