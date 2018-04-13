<template>
  <div id="app">
    <img src="./assets/logo.png">
   <!--<router-view/>-->
   <!--<hello></hello>-->
   <!--<page></page>-->
   <comment></comment>
  </div>
</template>

<script>
import comment from './components/comment/comment'
export default {
  name: 'App',
  
  components:{
    comment,
  },

  data : function (){
    return {
      age : 3
    }
  },

  methods : {
    add : function (){
      setTimeout(() => {
        console.log(this);
        this.age += 1;
      },1000);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
