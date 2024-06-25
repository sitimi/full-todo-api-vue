import { ref } from 'vue'
import { defineStore } from 'pinia'



export const useTodosStore = defineStore('todos', () => {
  const todos = ref([{}])

  function fetchTodosFromDb() {
    // 非同期処理
  }

  return { todos, fetchTodosFromDb }
})
