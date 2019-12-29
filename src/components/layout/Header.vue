<template>
  <header class="header">
    <h1>To Do List</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
  @import '../../styles/colors.scss';
  
  .header {
    background-color: $primary;
    color: $mainFont;
    padding: 10px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color:$secondaryFont;
  }
  a:hover {
    text-decoration: underline;
    color: $mainFont;
  }
</style> 