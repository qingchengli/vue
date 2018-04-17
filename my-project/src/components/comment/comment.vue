<template>
    <div class="comment">
        <p>
            <input type="text" placeholder="说点什么吧" v-model="msg"/>
            <button v-on:click="send">发表</button>
        </p>
        <ul>
            <li v-for="(temp,index) in list" v-if="index<7">{{temp}}</li>
        </ul>
        <transition 
        >
             <!--<div :is="who">1111</div>-->
             <p v-show="showIt" key='1'>123</p>
        </transition>
        
        <button @click="tabit">切换</button>
    </div>
</template>
<script>
    import cSon from './commentSon'

    export default {
        name : 'comment',

        components : {
            cSon,
            cSon2 : {
                template : '<p>22222</p>'
            }
        },

        data () {
            return {
                list: ['s'],
                msg: null,
                count: 1,
                who: 'cSon',
                showIt : false,
            }
        },

        methods : {
            
            send : function () {
                if (this.msg != null) {
                    this.list.push(this.msg);
                    this.count += 1;
                    this.msg = null;
                }
            },

            tabit : function () {
                // this.who == 'cSon' ? this.who = 'cSon2' : this.who = 'cSon'; 
                this.showIt == true ? this.showIt = false : this.showIt = true; 
                $('button').css({'color':'red'})

            },

        },

        filters : {
            num : function (value) {
                if (value != null){
                    return value.split('').reverse().join('');
                }else {
                    return null;
                }
            }
        }
    }
</script>
<style scoped>
    ul {
        list-style: none;
    }
    
    li {
        background: pink;
        height: 30px;
        width: 50%;
        margin: 10px auto;
        line-height: 30px;
        border-radius: 5px;
    }

    button {
        border: 0;
        background: greenblue;
        outline: none;
        width: 50px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>