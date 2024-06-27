<script setup>
import { useTodosStore } from '@/stores/todos'
import { ref } from 'vue';
import TodoForm from './TodoForm.vue';

const todoStore = useTodosStore()
const detailDialog = ref(false)
const editDialog = ref(false)
const clickedTodoId = ref(0)

const updateTodo = (todo)=>{
  todoStore.updateTodo(todo)
  editDialog.value = false
}
const clickItem = (val, id)=>{
  switch (val.id) {
    case 1:
      detailDialog.value = true
      break;
    case 2:
      clickedTodoId.value = id
      editDialog.value = true
      break;
    case 3:
      todoStore.deleteTodo(id);
      break;
    default:
      break;
  }
}
const items = [
  { title: "詳細", value: 1 },
  { title: "編集", value: 2 },
  { title: "削除", value: 3 },
]
</script>
<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">id</th>
        <th class="text-left">title</th>
        <th class="text-left">text</th>
        <th class="text-left">status</th>
        <th class="text-left">start_date</th>
        <th class="text-left">due_date</th>
        <th class="text-left">created_at</th>
        <th class="text-left">updated_at</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todoStore.todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.text }}</td>
        <td>{{ todo.status }}</td>
        <td>{{ todo.startDate }}</td>
        <td>{{ todo.dueDate }}</td>
        <td>{{ todo.createdAt }}</td>
        <td>{{ todo.updatedAt }}</td>
        <td>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" size="small"  icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            <v-list :items="items" @click:select="clickItem($event,todo.id)">

            </v-list>
          </v-menu>
        </td>
      </tr>
    </tbody>
    <v-dialog
      v-model="editDialog"
    >
        <TodoForm 
        cardTitle="編集"
        :todo-id="clickedTodoId" @onClickCancel="editDialog = false"
        @onClickSave="updateTodo"
    /></v-dialog>
    <v-dialog
      v-model="detailDialog"
    >
      <v-sheet>
        <v-sheet class="my-2 mx-5">
          <h2>Dialog</h2>

          <p class="my-4">
          詳細ボタン用ダイアログ仮置き
          </p>

          <v-btn color="primary" block @click="detailDialog = false">Close</v-btn>
        </v-sheet>
      </v-sheet>
    </v-dialog>

  </v-table>
</template>
