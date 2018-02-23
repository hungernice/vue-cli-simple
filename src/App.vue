<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!--<ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>-->
    <div>
		  <el-button >默认按钮</el-button>
		  <el-button type="primary" >主要按钮</el-button>
		  <el-button type="success" >成功按钮</el-button>
		  <el-button type="info" >信息按钮</el-button>
		  <el-button type="warning" >警告按钮</el-button>
		  <el-button type="danger" >危险按钮</el-button>
		</div>
    <ul>
    	<li>
    		<router-link to="/home">主页</router-link>
    	</li>
    	<li>
    		<router-link to="/news">新闻</router-link>
    	</li>
    </ul>
    <router-view></router-view>
    <Date></Date>
    <hr />
    <Button @click.native='get'></Button>
    <div>
    	{{myMsg}}
    </div>
  </div>
</template>

<script>
//import Vue from 'vue'
import  Axios from 'axios'
//Vue.use(Axios)
import Date from './components/Date.vue'
import Button from './components/Button.vue'
export default {
  name: 'app',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     	myMsg: '默认数据'
    }
  },
  components: {
  	Date,
  	Button
  },
  methods:{
  	get(){
  		Axios.get('a.txt').then(function(res){
  			this.myMsg =res.data
  		}.bind(this)).catch(function(err){
  			console.log(err)
  		})
  	}
  },
  mounted(){
  	this.get()
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
</style>
