<template>
  <div id="app">
    <md-toolbar class="md-accent">
      <h3 class="toolbar-title md-title">Month Calculator</h3>
    </md-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'assets/scss/theme';

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.toolbar-title {
  font-weight: 500 !important;
  color: var(--md-theme-default-primary-on-background, #ff8200) !important;
}
</style>
