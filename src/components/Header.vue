<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Lamarr</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <v-icon icon="mdi-dots-vertical" color="#fff"></v-icon>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">POR QUE USAR?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">COMO USAR</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SOBRE</a>
          </li>
        </ul>
        <span class="navbar-text">
        COMEÇAR
      </span>
      </div>
    </div>
  </nav>
<!--  <v-app-bar :elevation="0" class="header">-->
<!--    <v-app-bar-title class="title">Lamarr</v-app-bar-title>-->
<!--    <div class="spacer"></div>-->
<!--    <div class="btns">-->
<!--      <v-btn value="recent">-->
<!--        <span>Por que usar?</span>-->
<!--      </v-btn>-->

<!--      <v-btn value="sobre" variant="text">-->
<!--        <span>Sobre</span>-->
<!--      </v-btn>-->

<!--      <v-btn value="como usar">-->
<!--        <span>Como usar</span>-->
<!--      </v-btn>-->
<!--    </div>-->
<!--    <div class="spacer"></div>-->
<!--    <v-btn class="comecar" value="comecar">-->
<!--      <span>Começar</span>-->
<!--    </v-btn>-->
<!--  </v-app-bar>-->
</template>

<style scoped>
.v-app-bar {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}
.navbar{
  background-color: #000;
}
.navbar-brand {
  color: #fff;
  text-align: left;
  font-weight: bolder;
  font-size: 1.9em;
  margin-left: 2%;
}
.navbar-nav > li {
  font-family: "Lexend", sans-serif;
}

.nav-link, .navbar-text{
  color: white;
}
.navbar-toggler{
  border-color: transparent;
}

.collapse {
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
}

.navbar-text {
  position: absolute;
  right: 0;
  margin-right: 2rem;
  font-weight: bolder;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 1.5rem;
}
</style>