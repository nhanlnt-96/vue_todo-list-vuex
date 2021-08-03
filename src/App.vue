<template>
  <nav>
    <div id="nav" class="level-right">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <div class="container is-fluid container-height">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #2c3e50;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container-height {
  height: calc(100vh - 60px);
  padding: 20px !important;
}
</style>
