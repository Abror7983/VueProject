<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>

     <h2>
          Something is wrong! You might to <RouterLink to="/">Home</RouterLink>
     </h2>


     <RouterView/>
</template>

<style>
h2{
     color: rgb(121, 120, 120);
     text-align: center;
     padding-top: 20vh;
     
}
h2 a{
     text-decoration: none;
}
</style>