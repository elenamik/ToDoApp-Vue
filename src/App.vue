<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import './styles/colors.scss';
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border:none;
    background: $primaryAccent;
    color: $secondaryFont;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: $primary;
  }
</style>