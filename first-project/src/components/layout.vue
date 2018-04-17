<template>
    <div id="mine"> 
        <div class="my-header">1</div>
        <div class="my-container">
            <img :src="picUrl" alt="">
            <p v-for="">{{num}}</p>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="my-footer"></div>
    </div>
</template>
<script>
    export default {
        name: 'layout',

        data () {
            return {
                num: 2,
                picUrl: require('./../../static/1024821.jpg'),
            }
        },

        created: function () {
            this.$http({
                url: 'http://localhost:8080/api/seller',
                method: 'get',
                data: {i:1}
            }).then(
               data=>{
                  this.num = data.body.data.name;
                },
                function (err) {
                    console.log(err);
                }
            )
        }
    }    
</script>
<style lang='less' scoped>
    @import './../../static/color.less';
</style>