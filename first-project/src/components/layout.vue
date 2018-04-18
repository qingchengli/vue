<template>
    <div id="mine"> 
        <div class="my-header"></div>
        <div class="my-container">
            <!-- <test></test> -->
            <keep-alive>
                <slider :imgs="imgs" inv='3000'></slider>
            </keep-alive>
            
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="my-footer"></div>
    </div>
</template>
<script>
    import test from './test'
    import slider from './slider'
    export default {
        name: 'layout',

        components: {
            slider,
            test
        },

        data () {
            return {
                imgs: 0,
                isNum: true,
                picUrl: require('./../../static/1024821.jpg'),
                width: '600px',
            }
        },

        created: function () {
            this.$http({
                url: 'http://localhost:8080/api/slider',
                method: 'get',
                data: {i:1}
            }).then(
               data=>{
                  this.imgs = data.body.data;
                },
                function (err) {
                    console.log(err);
                }
            )
        }
    }    
</script>
<style lang='less'>
    @import './../../static/color.less';
    .on {
        color: green;
    }
    ul {
        list-style: none;
        margin: 0;  
    }
</style>