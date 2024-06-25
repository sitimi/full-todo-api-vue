<script setup>
import axios from 'axios';

const URL = "http://localhost:8080/todos";
const getData = async ()=>{
  const response = await axios.get(URL)
  console.log(response.data)

}
</script>

<template>
  <v-app>
    <v-main>
      <v-btn @click="getData">取得</v-btn>
    </v-main>
  </v-app>
</template>
