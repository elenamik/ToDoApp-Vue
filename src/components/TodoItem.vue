<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete"/>
      {{todo.title}}
      <button class="del" @click="$emit('del-todo', {id: todo.id})" >x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed=!this.todo.completed
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../styles/colors.scss';
  .todo-item {
    background:$secondary;
    border-bottom: 1px #ccc dotted;
    padding: 1% 2% 1% 2%;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: $primaryAccent;
    color: $mainFont;
    border: none;
    padding: 3px 7px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
    &:hover {
      background: $contrastAccent;
    }
  }
</style>
