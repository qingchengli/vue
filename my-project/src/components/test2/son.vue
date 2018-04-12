<template>
    <div class="son">
        <button @click="onSon">点我</button>
        <button @click="onSon2">点我2</button>
    </div>
</template>
<script>
    export default {
        name : 'son',
        
        data () {
            return {
             msg : 'test msg',   
            }
        },

        methods : {
            onSon : function () {
                // 子组件emit方法触发监听
                this.$emit('myown',this.msg)
            },

            onSon2 :function () {
                this.$emit('yourown','hi');
            }
        }
    }
</script>
