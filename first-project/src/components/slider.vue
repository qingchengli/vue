<template>
    <div class="slider-banner" @mouseover="stopIt" @mouseout="runIt">
        <div class="slider-box">
            <a :href="imgs[nowIndex].href">
                   <keep-alive> 
                        <transition name="fade">
                                <img v-if="isShow" :src="imgs[nowIndex].url"/>
                            </transition>
                            <transition name="old">
                                <img v-if="!isShow" :src="imgs[nowIndex].url"/>
                            </transition>
                   </keep-alive>
            </a>
            <div class="img-title">
                <p>{{imgs[nowIndex].title}}</p>
                <p>{{imgs[nowIndex].detail}}</p>
            </div>
        </div>
        <div class="slider-pages">
            <ul>
                <li @click='isShow = !isShow'>dd</li>
                <li @click="goto(prevPage)">&lt;</li>
                <li v-for="(temp,index) in imgs" :class='{on:index === nowIndex}' @click="goto(index)">
                    <span>{{index + 1}}</span>
                </li>
                <li @click="goto(nextPage)">&gt;</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'slider',

        props: ['imgs','inv'],


        mounted: function () {
            
        },

        data () {
            return {
                nowIndex:0,
                timer: null,
                isShow: true,
            }
        },

        methods: {
            goto: function (index) {
                this.isShow = false ;
                setTimeout (() => {
                    this.isShow = true ;
                    this.nowIndex = index;
                },10)
                
            },

            stopIt: function () {
                clearInterval(this.timer);
            },

            runIt: function () {
                this.timer = setInterval (()=>{
                    this.goto(this.nextPage);
                },this.inv)
            }
        },

        computed: {
            prevPage: function () {
                if (this.nowIndex == 0) {
                    return this.imgs.length - 1 ;
                }else {
                    return this.nowIndex - 1;
                }
            },
            nextPage: function () {
                if (this.nowIndex == this.imgs.length-1) {
                    return 0;
                }else {
                    return this.nowIndex + 1;
                }
            }
        }
    }
</script>
<style scoped>
    .slider-banner{
        width: 960px;
        height: 540px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    .slider-box{
        position: relative;
        width: 100%;
        height: 540px;
    }
   a{
        position: absolute;
        width: 960px;
        height: 540px;
    }

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index:  20;
    }

    .slider-detail {
        font-size: 18px;
    }
    /* 设置走马灯标题属性 */
    .img-title{
        color: white;
        font-size: 26px;
        margin: 0;
        position: absolute;
        left:0px;
        padding: 0px 0px 0px 20px;
        bottom: 10%;
        width: 100%;
        background: rgba(100,100,100,.6);
        z-index: 999;
    }
    .img-title p:first-child{
        font-size: 22px;
    }
    .img-title p:last-child{
        font-size: 16px;
    }
    .img-title li{
        display: inline-block;
    }
    /* 设置翻页扭定位 */
    .slider-pages {
        position: absolute;
        right: 20px;
        bottom: 10px;
        z-index: 25;
    }
    .slider-pages li{
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: white;
        margin:0 10px;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid rgb(245, 210, 15);
    }
    /* 设置当前页码高亮 */
    .on {
        background: rgb(245, 210, 15);
        border: 2px solid rgb(245, 210, 15);
    }
    /* 过渡效果 */
    .fade-enter-active,.old-leave-active{
       transition: all .8s ;
   }
    .fade-enter{
        transform: translateX(960px);
    }
    .old-leave-to{
        transform: translateX(-960px);
    }
    /* .fade-enter-active {
        transition: all 1.5s;
    }
    .fade-enter {
       transform: translateX(960px);
    }
    .fade-old-leave-active{
        transition: all 1.5s;
        transform: translateX(-960px);
    } */

    button {
        position: absolute;
        bottom: -10px;
        color:black;
    }
</style>