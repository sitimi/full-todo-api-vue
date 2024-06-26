<script setup>
import { onMounted } from 'vue'
import { useTodosStore } from '@/stores/todos'
import { ref } from 'vue'
import axios from 'axios'
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'

const todoStore = useTodosStore()
const URL = 'http://localhost:8080/todos'
const fetchTodosFromDb = async () => {
  const response = await axios.get(URL)
  todoStore.todos = response.data
  console.log('---フェッチされました---')
}

onMounted(async () => {
  await fetchTodosFromDb()
  console.log('---onMounted---')
})

const insertTodo = async (todo) => {
  await axios.post(URL, todo)
  dialog.value = false
  await fetchTodosFromDb()
}
const dialog = ref(false)
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-btn color="primary" variant="elevated" class="mx-auto" @click="fetchTodosFromDb"
        >画面更新</v-btn
      >
      <v-btn color="primary" variant="elevated" class="mx-auto">
        新規作成
        <v-dialog v-model="dialog" persistent activator="parent">
          <TodoForm @on-click-cancel="dialog = false" @on-click-save="insertTodo"
        /></v-dialog>
      </v-btn>
    </v-app-bar>
    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>
