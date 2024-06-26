<script setup>
import { onMounted } from 'vue';
import { useTodosStore } from '@/stores/todos'
import axios from 'axios';
import TodoList from '@/components/TodoList.vue'

const todoStore = useTodosStore()
const URL = "http://localhost:8080/todos";
const fetchTodosFromDb = async () => {
    const response = await axios.get(URL)
    todoStore.todos = response.data
    console.log('---フェッチされました---')
  }

onMounted(async () => {
  await fetchTodosFromDb()
  console.log('---onMounted---')
})

const onClicked = () => {
  console.log('clicked')
}
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-btn color="primary" variant ="elevated" class="mx-auto" @click="onClicked">新規作成</v-btn>
      <v-btn color="primary" variant ="elevated" class="mx-auto" @click="fetchTodosFromDb">画面更新</v-btn>
    </v-app-bar>
    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>
