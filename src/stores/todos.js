import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useTodosStore = defineStore('todos', () => {
  const todos = ref([{}])
  const URL = 'http://localhost:8080/todos'

  const fetchTodosFromDb = async () => {
    const response = await axios.get(URL)
    todos.value = response.data
    console.log('---フェッチされました---')
  }
  const insertTodo = async (todo) => {
    await axios.post(URL, todo)
    await fetchTodosFromDb()
  }
  const deleteTodo = async (id) => {
    await axios.delete(URL + "/" + id)
    await fetchTodosFromDb()
  }
  const updateTodo = async (todo)=>{
    await axios.put(URL + "/" + todo.id, todo)
    await fetchTodosFromDb()
  }

  return { todos,fetchTodosFromDb,insertTodo,deleteTodo,updateTodo }
})
