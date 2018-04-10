<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{msg1+msg2}}</h2>
    <ul>
    <template v-for="(temp,index) in banner">
      <li><img v-bind:src="temp.url"/></li>
    </template>
    </ul>
    <button v-on:click="changeClick()">点我</button>
    <a v-bind:href="myUrl" target="_blank">test</a>
    <!--按钮改变颜色-->
    <p :class="{color:toggle>0.5}">你好</p>
    <button v-on:click="changeColor()">改变颜色 </button>
  </div>
</template>

<script>
import pic from './../../static/1.jpg'
export default {
  name : 'hello',
  data () {
    return {
      msg : '欢迎来到vue的世界',
      msg1 : "欢迎",
      msg2 : "悦小笨",
      count : 3,
      list : [],
      toggle : Math.random(),
      // 颜色
      color : 'red',
      myUrl :'http://www.baidu.com',
      banner : [
        {url : pic},
        {url : pic},
        {url : pic},
      ]
    }
  },
  methods : {
    changeClick : function(msg){
      let num = Math.round(Math.random()*100);
      this.list.push(num);
      if(this.list.length == 10){
        this.list.length = 0;
      }
    },

    changeColor(){
      this.toggle = Math.random();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width:100px;
}
.color {
  color:rgb(200,20,100);
}
</style>
