<template>
  <div id="app">
    <img width="40px" src="./assets/logo.png">
    <Hello msg="Привет, Vue в CodeSandbox!" />
    <p>Пример простого кода Vuex, реализующего счётчик:</p>
    <iframe width="600" height="300vmin" 
    src="//jsfiddle.net/warsand/20bLnus7/embedded/js,html,css,result/dark/" 
    allowfullscreen="allowfullscreen" 
    allowpaymentrequest frameborder="0">
    </iframe>
  </div>
</template>

<script>
import Hello from "./components/Hello";

export default {
  name: "App",
  components: {
    Hello
    }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
