<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" placeholder="Add Todo.."/>
      <input type="submit" value="Submit" class="btn" v-on:/>
    </form>
  </div>
</template>
<script>

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo( event ){ 
      event.preventDefault()
      const newTodo = {
        title: this.title,
        completed: false,
      }
      this.$emit('add-todo',newTodo)
      this.title=''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
  .btn {
    &:hover{ 
      background: $contrastAccent;
    }
  }
</style>