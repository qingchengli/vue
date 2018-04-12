<template>
    <div class="year" >
        <ul>
            <li v-for="temp in list">
                <p>{{dayin()}}</p>
                <p>{{dayinto}}</p>
            </li>
        </ul>
        <hello></hello>
    </div>
</template>
<script>
    import hello from './hello'

    export default {
        name : 'year',

        components : {
            hello
        },
        data : function (){
            return {
                age : 2,
                msg : undefined,
                list : [1,2,3,4,5]
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
            },

            dayin : function (){
                console.log('in meth');
               return this.age;
            }
        },

        //定时器,挂载后每秒list多一个元素
        mounted : function (){
        },

        computed : {
            dayinto : function (){
                console.log('in com');
                return this.age;
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