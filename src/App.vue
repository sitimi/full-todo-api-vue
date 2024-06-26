<script setup>
import { onMounted } from 'vue';
import { useTodosStore } from '@/stores/todos'
import axios from 'axios';

const todoStore = useTodosStore()
const URL = "http://localhost:8080/todos";
const fetchTodosFromDb = async () => {
    const response = await axios.get(URL)
    todoStore.todos = response.data
  }

onMounted(async () => {
  await fetchTodosFromDb()
  console.log('---DBからフェッチしました---')
})
</script>

<template>
  <v-app>
    <v-main>
      
    </v-main>
  </v-app>
</template>
