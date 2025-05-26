<script setup lang="ts">
import Header from "./Header.vue";


</script>

<template>
  <v-app>
    <Header />
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>

</template>
<style scoped>
</style>