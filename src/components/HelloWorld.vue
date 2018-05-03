<template>
  <div class="hello">
    <hd></hd>
    <ul>
      <li>
        <router-link to='/test'>点击</router-link>
        <router-link to='/btn'>btn</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import hd from './header.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
        hd
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
</style>
