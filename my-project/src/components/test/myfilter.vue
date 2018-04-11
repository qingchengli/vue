<template>
    <div class="filter">
        <p v-for="temp in list">{{temp | label(temp)}}</p>
    </div>
</template>
<script>
    export default {
        name : 'myfilter',

        data () {
            return {
                num : 1,
                list : [1,2,3,2,0,2],
            }
        },

        filters : {
            label : function (arg,arg2)  {
                if (arg2 == 1) {
                    return "男";
                }else if (arg2 == 0) {
                    return "女";
                }else {
                    return "保密";
                }
            }
        }
    }  
</script>
<style scoped>
    p {
        display : inline-block;
        margin : 0 10px;
    }
</style>