<script setup>
import { useTodosStore } from '@/stores/todos'
import { ref } from 'vue';

const todoStore = useTodosStore()
const detailDialog = ref(false)
const editDialog = ref(false)

const clickItem = (val, id)=>{
  switch (val.id) {
    case 1:
      detailDialog.value = true
      break;
    case 2:
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
    <v-dialog
      v-model="editDialog"
    >
      <v-sheet>
        <v-sheet class="my-2 mx-5">
          <h2>Dialog</h2>

          <p class="my-4">
          編集ボタン用ダイアログ仮置き
          </p>

          <v-btn color="primary" block @click="editDialog = false">Close</v-btn>
        </v-sheet>
      </v-sheet>
    </v-dialog>
  </v-table>
</template>
