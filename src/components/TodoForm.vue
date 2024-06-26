<script setup>
import { ref } from 'vue'

const todo = ref({
  title: '',
  text: '',
  status: '未着手',
  dueDate: ''
})
const statusData = ['未着手', '着手', '完了']
</script>
<template>
  <v-card class="mx-auto w-50" max-width="600px" title="New todo">
    <v-container>
      <v-text-field
        v-model="todo.title"
        color="primary"
        label="Title"
        variant="outlined"
      ></v-text-field>

      <v-textarea
        v-model="todo.text"
        color="primary"
        label="Text"
        variant="outlined"
      ></v-textarea>
      <v-select
        v-model="todo.status"
        :items="statusData"
        label="Status"
        class="w-25 mx-auto"
        min-width="115px"
      ></v-select>
      <v-text-field
        v-model="todo.dueDate"
        color="primary"
        label="期限"
        variant="underlined"
        type="date"
        class="w-25 mx-auto"
        min-width="140px"
      ></v-text-field>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="primary" @click="$emit('onClickSave', todo)">保存</v-btn>
      <v-btn color="primary" @click="$emit('onClickCancel')">キャンセル</v-btn>
    </v-card-actions>
  </v-card>
</template>
