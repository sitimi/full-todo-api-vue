<script setup>
import { onMounted } from 'vue'
import { useTodosStore } from '@/stores/todos'
import { ref } from 'vue'
import TodoTable from '@/components/TodoTable.vue'
import TodoList from './components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'

const todoStore = useTodosStore()

// マウント時にDBからデータ取得
onMounted(async () => {
  await todoStore.fetchTodosFromDb()
})
const dialog = ref(false)
const onClickSave = (todo) =>{
  todoStore.insertTodo(todo)
  dialog.value = false
}
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-btn color="primary" variant="elevated" class="mx-auto" @click="todoStore.fetchTodosFromDb"
        >画面更新</v-btn
      >
      <v-btn color="primary" variant="elevated" class="mx-auto">
        新規作成
        <v-dialog v-model="dialog" persistent activator="parent">
          <TodoForm
          card-title="新規作成"
          @on-click-cancel="dialog = false" @on-click-save="onClickSave"
        /></v-dialog>
      </v-btn>
    </v-app-bar>
    <v-main>
      <!-- <TodoTable /> -->
      <TodoList />
    </v-main>
  </v-app>
</template>
