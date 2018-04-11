<template>
    <div class="year" >
        <p >{{age}}</p>
        <button v-on:click="add">增加</button>
        <!--测试watch-->
        <input type="text" v-model="msg">
    </div>
</template>
<script>
    export default {
        name : 'year',

        data : function (){
            return {
                age : 2,
                msg : undefined,
            }
        },

        watch : {
            msg : function (newMsg,oldMsg){
                console.log(newMsg+oldMsg);
            }
        },

        methods : {
            add : function (){
                this.age += 1;
            }
        },

        beforeCreate : function (){
            console.log('准备创建');
        },

        created : function (){
            console.log('创建完毕');
        },

        beforeMount : function (){
            console.log("准备挂载");
        },

        mounted : function (){
            console.log('挂载完毕');
        },

        // beforeUpdate : function (){
        //     console.log("准备更新");
        // },

        // updated : function (){
        //     console.log("已经更新");
        // },

        beforeDestroy : function (){
            console.log("准备删除");
        },

        destroyed : function (){
            console.log("已经删除");
        }
    }
</script>
<style scoped>
    button {
        border : 0;
        outline : 0;
        background : pink;
    }
</style>