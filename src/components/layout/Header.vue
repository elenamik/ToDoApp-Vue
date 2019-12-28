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

<style scoped>
  .header {
    background-color: rgb(75, 11, 11);
    color:rgb(255, 255, 235);
    padding: 10px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color:rgb(255, 255, 235);
  }
  a:hover {
    text-decoration: underline;
    color:rgb(255, 255, 235);
  }
</style> 