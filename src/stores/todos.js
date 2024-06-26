import { ref } from 'vue'
import { defineStore } from 'pinia'



export const useTodosStore = defineStore('todos', () => {
  const todos = ref([{}])
  
  return { todos }
})
