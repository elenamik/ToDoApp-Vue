<template>
  <div id="home">
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    <AddTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>
import Todos from '../components/Todos.vue'
import AddTodo from '../components/AddTodo.vue'
import axios from 'axios'
import uuid from 'uuid'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [ ]
    }
  },
  methods: {
    deleteTodo( target ) {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      this.todos = this.todos.filter( todo => todo.id != target.id )
    },
    addTodo( newTodo ) {
      const {title, completed} = newTodo
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed,
      })
      .then( res => {
        // eslint-disable-next-line no-console
        console.log(res.data)
        res.data.id=uuid.v4()
        this.todos = [...this.todos, res.data]
      }

      ).catch( err =>{
      // eslint-disable-next-line no-console
      console.log(err)
      })
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then( res  => {
        this.todos = res.data
      })
      // eslint-disable-next-line no-console
      .catch( err => console.log(err) )
  }
}
</script>