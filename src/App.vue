<script setup>
import axios from 'axios';

const URL = "http://localhost:8080/todos";
const getData =()=>{
  axios.get(URL)
  .then((response)=>{
    console.log(response)
  })
  .catch((error)=>{
    console.log('エラー発生')
    console.log(error.message)
  })

}
</script>

<template>
  <v-app>
    <v-main>
      <v-btn @click="getData">取得</v-btn>
    </v-main>
  </v-app>
</template>
