<script setup>
import { useTodosStore } from '@/stores/todos'

const todoStore = useTodosStore()
</script>
<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          title
        </th>
        <th class="text-left">
          text
        </th>
        <th class="text-left">
          status
        </th>
        <th class="text-left">
          due_date
        </th>
        <th class="text-left">
          created_at
        </th>
        <th class="text-left">
          updated_at
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="todo in todoStore.todos"
        :key="todo.id"
      >
        <td>{{ todo.title }}</td>
        <td>{{ todo.text }}</td>
        <td>{{ todo.status }}</td>
        <td>{{ todo.dueDate }}</td>
        <td>{{ todo.createdAt }}</td>
        <td>{{ todo.updatedAt }}</td>
      </tr>
    </tbody>
  </v-table>
</template>