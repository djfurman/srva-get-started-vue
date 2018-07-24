<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="https://meetup.com/Serverless-RVA" class="navbar-item">
          <img src="./assets/serverless_RVA3.png" alt="Serverless Richmond, Virginia Logo">
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-item" v-for="link in links" v-bind:key="link.path"><router-link :to="link.path">{{link.text}}</router-link></div>
      </div>
    </nav>

    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {path: '/', text: 'Leave message'},
        {path: '/hello', text: 'VueJS Hello World'}
      ]
    }
  }
}
</script>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
