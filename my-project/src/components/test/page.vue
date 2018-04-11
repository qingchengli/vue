<template>
    <div class="page">
        <ul>
            <button v-on:click="prev()">上一页</button>
            <li v-for="temp in list" v-bind:class="{on:page==temp}" v-on:click="onPage(temp)">{{temp}}</li>
            <button v-on:click="next()">下一页</button>
        </ul>
        <p v-focus="style" v-if="move>1">悦小笨儿是猪</p>
        <button v-on:click="pop()">改变</button>
    </div>
</template>
<script>
    import hello from './hello'

    export default {
        name : 'Page',
        components : {
            hello
        },

        data () {
            return{
                list : [1, 2, 3, 4, 5, 6,7,8] ,
                page : 1 ,
                move : 2 ,
                style : {
                    'color' : 'red',
                    'fontSize' : '12px',
                },
                style2 : {
                    'color' : 'pink',
                    'fontSize' : '16px',
                },
            }   
        },
        methods : {
            prev : function () {
                if ( this.page > 1 ) {
                    this.page -= 1;
                }
            },

            next : function () {
                 if ( this.page < this.list.length ) {
                    this.page += 1;
                }
            },

            onPage : function (temp) {
                this. page = temp;
            },

            pop : function () {
                this.style = this.style2;
            }
        }
    }
</script>
<!--样式用于本组件-->
<style scoped>
    ul {
        list-style:none;
    }

    ul li {
        display : inline-block;
        width : 30px;
        height : 30px;
        line-height : 30px;
        border : 1px solid black;
        border-radius : 5px;    
        margin : 0 10px;
        cursor : pointer ;
    }

    .on {
        background : rgb(151, 210, 224);
    }

    button {
        height : 30px;
        line-height : 30px;
        border-radius : 5px;
        border : 0;
        outline : none;    
        margin : 0 10px;
        background : pink;
        cursor : pointer ;
    }
</style>

